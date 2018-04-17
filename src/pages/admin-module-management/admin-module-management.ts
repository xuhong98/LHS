import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';
import { Module } from '../../entities/module';

import {ModuleDetailPage} from '../module-detail/module-detail'


/**
 * Generated class for the AdminModuleManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-module-management',
  templateUrl: 'admin-module-management.html',
})
export class AdminModuleManagementPage {

	errorMessage: string;
	infoMessage: string;

	submitted: boolean;
	public modules = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public modalCtrl: ModalController) {
  
  	this.submitted = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminModuleManagementPage');
  }

  clear()
  {
  		this.infoMessage = null;
		this.errorMessage = null;
		this.submitted = false;
  }

 	create(){

 	}

 	viewModule(module:Module){
 		this.navCtrl.push(ModuleDetailPage,{
 			module:module
 		});
 	}

	delete(){
	
	}

	
}
