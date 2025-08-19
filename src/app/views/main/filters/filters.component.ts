import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { ProjectsService } from '../../../shared/services/projects.service';
import { ProjectCardType } from '../../../../types/project-card.type';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    @Output() projectsChange = new EventEmitter<ProjectCardType[]>();

    constructor(private projectsService: ProjectsService) {}

    trackByIndex(index: number, item: any) {
        return index;
    }

    projectFilter = [
        { active: true, name: 'Все проекты' },
        { active: false, name: 'Angular' },
        { active: false, name: 'React' },
        { active: false, name: 'JavaScript' },
        { active: false, name: 'TypeScript' },
        { active: false, name: 'CSS' },
        { active: false, name: 'SCSS' },
        { active: false, name: 'Less' },
    ];

    projects: ProjectCardType[] = [];

    ngOnInit() {
        // при загрузке показываем все проекты
        this.projects = this.projectsService.getProjects();
        this.projectsChange.emit(this.projects);
    }

    changeFilter(filter: any) {
        // сбросить активность у всех
        this.projectFilter.forEach(el => (el.active = false));
        // выделить текущий
        filter.active = true;

        // получить проекты по фильтру
        this.projects = this.projectsService.getProjectsByFilter(filter.name);

        this.projectsChange.emit(this.projects);

    }
}
