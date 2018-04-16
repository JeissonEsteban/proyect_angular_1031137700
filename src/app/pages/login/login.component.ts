import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../redux/app.store";
import { FormControl, FormGroup,Validators  } from '@angular/forms';
import { Router } from '@angular/router';

//services
import { GlobalService } from "../../services/global.service";
import { LoginUserAction } from '../../redux/app.actions';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin:FormGroup;
  public messageLogin:string;

  constructor(
    private store:Store<AppState>,
    private global:GlobalService,
    private router:Router
  ) {
    //styles
    document.body.style.background=" url('/assets/img/background.png') no-repeat center center fixed";
    document.body.style.backgroundSize="cover";

    //forms
    this.formLogin= new FormGroup({
      accessCode:new FormControl('',[Validators.required ]),
      password:new FormControl('',[Validators.required ])
    });

    //redux
    this.store.select('user').subscribe(userState=>{

      if(userState.userIsLogged)
      {
        this.router.navigate(['/dashboard']);
      }
      else
      {
        this.messageLogin=userState.userloginMessage;
      }
    })
  }

  ngOnInit() {

    
  
  }

  
  public LogInClick()
  {
    let action = new LoginUserAction(
      this.formLogin.value['accessCode'],
      this.formLogin.value['password']
    );

    this.store.dispatch(action);
  }

  public CanLoginClick():boolean
  {
    return this.formLogin.status=='VALID';
  }
}
