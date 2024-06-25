import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class cadastroPage {
  email: string=""
  password: string=""

  constructor(private auth: Auth, private navCtrl: NavController) {}

  async cadastro() {
    try {
      await createUserWithEmailAndPassword(this.auth,this.email, this.password);
      this.navCtrl.navigateRoot('/home');
    } catch (error) {
      console.error(error);
    }
  }
}