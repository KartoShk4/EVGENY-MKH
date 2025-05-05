import { Component} from '@angular/core';
import {TechType} from "../../../../types/tech.type";

@Component({
  selector: 'tech-component',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {

  techs: TechType[] = [
    {
      imageUrl: 'assets/images/icons/tech/html.svg',
      name: 'html'
    },
    {
      imageUrl: 'assets/images/icons/tech/css.svg',
      name: 'css'
    },
    {
      imageUrl: 'assets/images/icons/tech/javascript.svg',
      name: 'javascript'
    },
    {
      imageUrl: 'assets/images/icons/tech/typescript.png',
      name: 'typescript'
    },
    {
      imageUrl: 'assets/images/icons/tech/sass.svg',
      name: 'sass'
    },
    {
      imageUrl: 'assets/images/icons/tech/bootstrap.svg',
      name: 'bootstrap'
    },
    {
      imageUrl: 'assets/images/icons/tech/github.svg',
      name: 'github'
    },
    {
      imageUrl: 'assets/images/icons/tech/git.svg',
      name: 'git'
    },
    {
      imageUrl: 'assets/images/icons/tech/vscode.svg',
      name: 'vscode'
    },
    {
      imageUrl: 'assets/images/icons/tech/angular.png',
      name: 'angular'
    },
    {
      imageUrl: 'assets/images/icons/tech/webpack.png',
      name: 'webpack'
    },
    {
      imageUrl: 'assets/images/icons/tech/figma.png',
      name: 'figma'
    },
    {
      imageUrl: 'assets/images/icons/tech/grunt.svg',
      name: 'grunt'
    },
    {
      imageUrl: 'assets/images/icons/tech/gulp.png',
      name: 'gulp'
    },
    {
      imageUrl: 'assets/images/icons/tech/jquery.png',
      name: 'jquery'
    },
    {
      imageUrl: 'assets/images/icons/tech/npm.png',
      name: 'npm'
    },
    {
      imageUrl: 'assets/images/icons/tech/photoshop.png',
      name: 'photoshop'
    },
    {
      imageUrl: 'assets/images/icons/tech/webstorm.png',
      name: 'webstorm'
    },
  ]

}
