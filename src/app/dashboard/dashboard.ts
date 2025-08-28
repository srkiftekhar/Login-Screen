import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.css'],
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  displayedColumns: string[] = ['id', 'name', 'course', 'date'];

  dataSource = [
    {
      id: 'C101',
      name: 'Rahul Mehta',
      course: 'MERN Stack',
      date: '2025-08-20',
    },
    {
      id: 'C102',
      name: 'Priya Sharma',
      course: 'Java Spring Boot',
      date: '2025-08-19',
    },
    {
      id: 'C103',
      name: 'Arjun Verma',
      course: 'Data Science',
      date: '2025-08-22',
    },
  ];
}
