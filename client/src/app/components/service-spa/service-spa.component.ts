import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spa } from 'src/app/models/spa';
import { SpaService } from 'src/app/services/spa.service';

@Component({
  selector: 'app-service-spa',
  templateUrl: './service-spa.component.html',
  styleUrls: ['./service-spa.component.css']
})
export class ServiceSpaComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  service: Spa = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0.0,
    image: ''
  };

  horarios: any = [];

  constructor(private spaService: SpaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.spaService.getService(params.id)
      .subscribe(
        res => {
          this.service = res[0];
        },
        err => console.error(err)
      );
      this.spaService.getHorario(params.id)
      .subscribe(
        res => {
          this.horarios = res;
        },
        err => console.error(err)
      );
    }
  }

}
