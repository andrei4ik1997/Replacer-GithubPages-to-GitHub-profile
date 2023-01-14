import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GitHub, Separator } from './main.enum';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  protected form = this.fb.nonNullable.group({
    gitHubPageUrl: '',
  });

  protected result: string = '';

  constructor(private fb: FormBuilder) {}

  protected onConvert(e: Event): void {
    const url = this.form.value.gitHubPageUrl;

    this.result = this.convertUrl(url);
  }

  protected onReset(e: Event): void {
    e.preventDefault();
    this.result = '';
    this.form.reset();
  }

  private convertUrl(url: string = ''): string {
    const withOutProtocol = url.replace(GitHub.Protocol, '');
    const getGitNickname = withOutProtocol.split(Separator.Dot).at(0);
    const nameProject = withOutProtocol
      .split(Separator.Slash)
      .filter((item) => item)
      .at(-1);

    return (
      GitHub.Protocol +
      GitHub.Ulr +
      Separator.Slash +
      getGitNickname +
      Separator.Slash +
      nameProject
    );
  }
}
