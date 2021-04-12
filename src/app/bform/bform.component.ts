import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {AngularFireDatabase} from '@angular/fire/database';
import{AngularFirestore} from '@angular/fire/firestore'
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bform',
  templateUrl: './bform.component.html',
  styleUrls: ['./bform.component.css']
})
export class BformComponent implements OnInit {
 public propertyId:number
  productPrice:number
  registrationForm: any;
  user: any;
  file: number;
  //resullt: string;
  uploads: any[];
  files: Observable<any>;
  create: boolean;
  name: string;
  valid: boolean;
  constructor(private route:ActivatedRoute , private fb:FormBuilder,private afStorage: AngularFireDatabase , private af:AngularFireStorage, private afs:AngularFirestore) { }
//filePath:String;
  ngOnInit(): void {
    this.create=true;
    this.propertyId=this.route.snapshot.params['id'];
    if(this.propertyId==1){
        this.productPrice=99
      }
    else if(this.propertyId==2){
      this.productPrice=799
    }
    else
        this.productPrice=1299
        this.createRegistrationForm();
  }
      createRegistrationForm(){
    
        this.registrationForm=this.fb.group({
          userName: ['',[Validators.required]],
          email:['',[Validators.required, Validators.email]],
          task:[''],
          examType:[''],
          Mob:[''],
          feedbackTime:[''],
          uploadTask:['',[Validators.required]]
    
      });
    }
    priceUpdate(){
      const {feedbackTime}=this.registrationForm.value;
      if(this.propertyId==1){
        if(feedbackTime=="12 hours"){
        this.productPrice=99+200
        }
        else if (feedbackTime=="24 hours"){
          this.productPrice=99+100
        }
        else{
          this.productPrice=99
        }
      }
    else if(this.propertyId==2){
      if(feedbackTime=="12 hours"){
        this.productPrice=799+200
        }
        else if (feedbackTime=="24 hours"){
          this.productPrice=799+100
        }
        else{
          this.productPrice=799
        }
    }
    else{
      if(feedbackTime=="12 hours"){
        this.productPrice=1299+200
        }
        else if (feedbackTime=="24 hours"){
          this.productPrice=1299+100
        }
        else{
          this.productPrice=1299
        }
      }
    }
    // onSelectedFile(event: { target: { files: string | any[]; }; }) {
    //   if (event.target.files.length > 0) {
    //     const file = event.target.files[0];
    //     this.registrationForm.get('uploadTask').setValue(file);
    //   }
    //}
    fileupload(){
      const {task}=this.registrationForm.value;
      if(task==1){
        this.file=1;
      }
      else if(task==2){
        this.file=2;
      }
      else if(task==10){
        this.file=10;
      }
      else if(task==25){
        this.file=25;
      }
      else if(task==30){
        this.file=30;
      }
      else{
        this.file=0;
      }
             
    }
      onSubmit(){
         const {userName, email, task,examType,Mob,feedbackTime,uploadTask} = this.registrationForm.value;
        // const date = Date();
        // const html = `
        //   <div>From: ${name}</div>
        //   <div>Email: <a href="mailto:${email}">${email}</a></div>
        //   <div>Date: ${date}</div>
        //   <div>Message: ${message}</div>
        // `;
       let formRequest = {userName, email, task,examType,Mob,feedbackTime,uploadTask};
       this.afStorage.list('/studentData').push(formRequest);
         this.uploadImage();
        console.log(this.registrationForm);
        this.create=false;
        this.name=userName;
       // this.user=Object.assign(this.user,this.registrationForm.value);
       // localStorage.setItem('User', JSON.stringify(this.user))
      }
      onSelectedFile(event:any) { 
        
        this.uploads = [];
    const filelist = event.target.files;
    const allPercentage: Observable<number>[] = [];
    if (parseInt(filelist.length) <= this.file){
      
    for (const file of filelist) {

      const path = `files/${file.name}`;
      const ref = this.af.ref(path);
      const task = this.af.upload(path, file);
      
      const uploadTrack = {
        fileName: file.name,
         }

      // push each upload into the array
      this.uploads.push(uploadTrack);

      // for every upload do whatever you want in firestore with the uploaded file
      const _t = task.then((f) => {
        return f.ref.getDownloadURL().then((url) => {
          return this.afs.collection('files').add({
            name: f.metadata.name,
            url: url
          });
        })
      })

    this.valid=true;
      
      // this.filePath = event.target.files[0];
       
      }
    }
    else{
      alert(`You are only allowed to upload a maximum of ${this.file}  files`);
      this.valid=false;
    }
  }
      uploadImage(){
        const {uploadTask} = this.registrationForm.value;
        console.log(this.uploads);
        this.af.upload('/files'+uploadTask+this.uploads,this.uploads);
      }
}
