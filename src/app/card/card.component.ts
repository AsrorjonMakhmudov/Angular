import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title = 'My Card Title';

  text = 'My simple text';
  disabled = false;
  logoChange: boolean = true;
  imgUrl: string =
    'https://static.wixstatic.com/media/1b14cf_6c8a8655dd1e484883214f828ffd683a~mv2.png/v1/fill/w_420,h_420,al_c,lg_1,q_85/Angular%20Thailand.webp';

  ngOnInit() {}

  //   changeLogo(){
  //     this.logoChange = !this.logoChange;
  //   }

  inputHandler(event: any) {
    const value = event.target.value;
    this.title = value;
  }

  getInfo() {
    return 'This is my info';
  }
  changeTitle() {
    this.title = 'Change title with function';
  }
}
