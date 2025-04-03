import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getByDir } from '../../../../testing/helper-functions/getByDir';
import { getEl } from '../../../../testing/helper-functions/getEl';
import { AmPmToggleComponent } from './am-pm-toggle.component';


@Component({
    template: `
  <cc-am-pm-toggle
    [idStr]="idStr"
    [(isPM)]="isPM"
    [disabled]="disabled"
  ></cc-am-pm-toggle>
  `,
    standalone: false
})
class TestApPmComponent {
  idStr
  isPM = false;
  disabled = false;
}

describe('AmPmToggleComponent', () => {

  let fixture: ComponentFixture<TestApPmComponent>;
  let parent: TestApPmComponent;
  let component: AmPmToggleComponent;
  let toggle: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestApPmComponent,
        AmPmToggleComponent
      ]
    })

    fixture = TestBed.createComponent(TestApPmComponent);
    parent = fixture.componentInstance;
    component = getByDir(fixture, AmPmToggleComponent).componentInstance;
    toggle = getEl(fixture, 'input');
  })



  it('should load instance', () => {
    expect(component).toBeTruthy();
  });


  it('sets the id by deafult', () => {
    expect(component.idStr).toContain('am-pm-toggle-')
  })

  it('allows an id to be passed in', () => {
    parent.idStr = 'my id';
    fixture.detectChanges();
    expect(component.idStr).toBe('my id')
  })

  it('binds/emits when clicked', () => {
    parent.isPM = false;
    fixture.detectChanges();
    toggle.click();
    expect(parent.isPM).toBe(true)
  })

  it('can be disabled', () => {
    parent.disabled = true;
    parent.isPM = false;
    fixture.detectChanges();
    toggle.click();
    expect(parent.isPM).toBe(false)
  })
})
