import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { PapelService } from './papel.service';
import { Papel } from './papel';

@Component({
  selector: 'app-papel',
  templateUrl: './papel.component.html',
  styleUrls: ['./papel.component.css']
})
export class PapelComponent implements OnInit {
  displayedColumns: string[] = ['sigla',  'descricao', 'editar', 'deletar'];
  dataSource = new MatTableDataSource<any>();

  selectedPapel: Papel = new Papel();
  loading = false;

  constructor(public papelService: PapelService) {
  }



  // tslint:disable-next-line:typedef
  async refresh() {
    this.loading = true;
    const data = await this.papelService.getPapels();
    this.dataSource.data = data;
    this.loading = false;
  }

  // tslint:disable-next-line:typedef
  async updatePapel() {
    if (this.selectedPapel.id !== undefined) {
      await this.papelService.updatePapel(this.selectedPapel);
    } else {
      await this.papelService.createPapel(this.selectedPapel);
    }
    this.selectedPapel = new Papel();
    await this.refresh();
  }

  // tslint:disable-next-line:typedef
  editPapel(papel: Papel) {
    this.selectedPapel = papel;
  }

  // tslint:disable-next-line:typedef
  clearPapel() {
    this.selectedPapel = new Papel();
  }

  // tslint:disable-next-line:typedef
  async deletePapel(papel: Papel) {
    this.loading = true;
    if (confirm(`Voce tem certeza que deseja deletar o papel: ${papel.sigla}.`)) {
      this.papelService.deletePapel(papel.id);
    }
    await this.refresh();
  }

  ngOnInit(): void {
  }
}
