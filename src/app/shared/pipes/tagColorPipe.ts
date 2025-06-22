import { Pipe, PipeTransform } from '@angular/core';

const TAG_COLORS: Record<string, string> = {
  html: '#e34c26',
  css: '#264de4',
  scss: '#cd6799',
  less: '#1d365d',
  javascript: '#f7df1e',
  typescript: '#3178c6',
  angular: '#dd0031',
  react: '#61dafb',
  vue: '#42b883',
  nuxt: '#00dc82',
  webpack: '#8ed6fb',
  gulp: '#d34c3a',
  grunt: '#fba919',
  bootstrap: '#7952b3',
  jquery: '#0769ad',
  npm: '#cb3837',
  docker: '#2496ed',
  tailwindcss: '#38b2ac',
  nodejs: '#339933',
  express: '#000000',
  mongodb: '#47a248',
  jest: '#99425b',
  redux: '#764abc',
  firebase: '#ffcb2b',
};

@Pipe({
  name: 'tagColor',
})
export class TagColorPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '#ccc';
    const key = value.toLowerCase();
    return TAG_COLORS[key] || '#ccc';
  }
}
