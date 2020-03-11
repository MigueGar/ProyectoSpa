import { Component, OnInit, HostBinding } from '@angular/core';
import { SpaService } from 'src/app/services/spa.service';

@Component({
  selector: 'app-services-spa-list',
  templateUrl: './services-spa-list.component.html',
  styleUrls: ['./services-spa-list.component.css']
})
export class ServicesSpaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  services: any = []
  searchText: string;

  constructor(private spaService: SpaService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.spaService.getAllServices().subscribe(
      res => {
        this.services = res;
      },
      err => console.log(err)
    );
  }

  ordenarPorPrecioMayor() {
    this.services.sort(function(a, b) {
      return (b.precio - a.precio)
    });
  }

  ordenarPorPrecioMenor() {
    this.services.sort(function(a, b) {
      return (a.precio - b.precio)
    });
  }

  ordenarPorDefecto() {
    this.services.sort(function(a, b) {
      return (a.id - b.id)
    });
  }

}
