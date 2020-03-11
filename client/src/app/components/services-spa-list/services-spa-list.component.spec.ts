import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ServicesSpaListComponent } from './services-spa-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FilterPipe } from 'src/app/filter.pipe';
import { SpaService } from 'src/app/services/spa.service';
import { Observable } from 'rxjs';
import { Spa } from 'src/app/models/spa';

class MockSpaService extends SpaService {
  getAllServices() {
    return new Observable<Spa>();
  }
}

describe('ServicesSpaListComponent', () => {
  let component: ServicesSpaListComponent;
  let service: MockSpaService;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterModule.forRoot([]) ],
      declarations: [ ServicesSpaListComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockSpaService(httpClient);
    component = new ServicesSpaListComponent(service);
    const aux = component.getServices();
    expect(aux).toBeUndefined();
  });

  it('should create', () => {
    const aux = component.getServices();
    expect(aux).toBeUndefined();
  });

});
