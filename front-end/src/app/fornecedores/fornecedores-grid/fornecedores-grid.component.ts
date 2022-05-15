import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MenuItem } from 'primeng/api';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor-service.service';
import Fornecedor from 'src/app/services/models/fornecedor';
import { FornecedoresGridDataSource, FornecedoresGridItem } from './fornecedores-grid-datasource';

@Component({
  selector: 'app-fornecedores-grid',
  templateUrl: './fornecedores-grid.component.html',
  styleUrls: ['./fornecedores-grid.component.scss']
})
export class FornecedoresGridComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FornecedoresGridItem>;
  dataSource: FornecedoresGridDataSource;
  items: MenuItem[];
  selectedItem: any = null;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Codigo', 'NomeFantasia', 'Email', 'Telefone'];

  constructor(private fornecedorService: FornecedorService) {
    this.dataSource = new FornecedoresGridDataSource();
  }

  ngAfterViewInit(): void {
    this.items = [{
      label: 'Menu',
      items: [{
          label: 'Atualizar',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          },
      },
      {
          label: 'Remover',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }]}]
  
    this.fornecedorService.getFornecedores().subscribe((res: Fornecedor[]) => {
      this.dataSource.data = res
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  update() {
    this.fornecedorService.deleteFornecedor(this.selectedItem.Codigo)
  }

  delete() {
    this.fornecedorService.deleteFornecedor(this.selectedItem.Codigo).subscribe()
  }
  
}
