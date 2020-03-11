import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSpaComponent } from './service-spa.component';
import { SpaService } from 'src/app/services/spa.service';
import { Observable } from 'rxjs';
import { Spa } from 'src/app/models/spa';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';

class MockSpaService extends SpaService {
  getService() {
    return new Observable<Spa>();
  }
}

describe('ServiceSpaComponent', () => {
  let component: ServiceSpaComponent;
  let service: MockSpaService;
  let httpClient: HttpClient;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterModule.forRoot([]) ],
      declarations: [ ServiceSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockSpaService(httpClient);
    component = new ServiceSpaComponent(service, activatedRoute);    
  });

  it('should create', () => {
    console.log(component);
    expect(component);
  });
  
});
