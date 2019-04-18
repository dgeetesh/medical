import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  model: any={};
  doctorlist:any;
  notcheck : any;
  selectedDeviceObj : any;
  selectedLocationDoctorsFilter : any;
  locationList: any;
  fronts:any;
  private url="http://localhost:53404/api/Doctors";
  typesList:any;
  myid :any;
  selectedTypesDoctors: any;
  selectedLocationDoctors: any;
  isDone : boolean = true;
  clickMessage = '';
  selectedDoctos : any;
  constructor(private router: Router,http: HttpClient) {
    http.get(this.url).subscribe( response=>{
      console.log(response);
      this.fronts=response;
    });
  }
  ngOnInit() {
    this.notcheck = false;
    this.selectedDeviceObj = "Select Doctors";
    console.log('frontPage');
    this.locationList=  ['A B Road','Anpurana road','Bhawarkua','Geeta Bhawan','M G Road','Navlakha','Palasia','Rajendra Nagar','Rajwada','Rau','Ring Road','Sapna Sangeeta Road','South Tukoganj','Vijay Nagar'];
    console.log(this.locationList);
    this.typesList=['Addiction psychiatrist','Adolescent medicine specialist','Allergist','Anesthesiologist','Asthma Specialist','Cardiologist','Dentist','Dental Surgeon','Dermatologists','Diabetologist','ENT/ Otorhinolaryngologist','Endocrinologists','Eye Specialist','General Physician','General Surgeon','Joint Replacement Surgery','Neurologist','Orthopaedic Doctors','Spine Surgeons'];
    console.log(this.typesList);
    let data= {
      doctorImage:"assets/images/D2.jpg",
      name: "rajesh sharma",
      id : 1,
      Location:"Rajendra Nagar",
      city:"indore",
      Adress:"102 rajendranagar indore  42001",
      specilist:"Dentist,Dental Surgeon",
      phon:9103879023,
       }
    let data1={
      doctorImage:"assets/images/D5.jpg",
      name:"Dr Rakesh Shivhare",
      id : 2,
      Location: "Palasia",
      Adress:"201 palasia indore 452001",
      specilist:"Addiction psychiatrist,Anesthesiologist,Endocrinologists	",
      phon:72588942294,
    }
    let data2={
      doctorImage:"assets/images/D5.jpg",
      name:"Dr Deepak manashwari ",
      id : 3,
      Location: "Anpurana road",
      Adress:"10 Anpurana road  indore 452009",
      specilist:"Cardiologist,Dermatologists,Endocrinologists	",
      phon:79210678894,
    }
    let data3={
      doctorImage:"assets/images/D5.jpg",
      name:"Dr Sachin Kothi",
      id : 4,
      Location: "Rajwada",
      Adress:"108 Rajwada indore 452001",
      specilist:"Allergist,Asthma Specialist ",
      phon:587893939,
    }
    let data4={
      doctorImage:"assets/images/6.jpg",
      name:"Dr C L Verma ",
      id : 5,
      Location: "Navlakha",
      Adress:"304 Navlakha, indore 452001",
      specilist:"Anesthesiologist,Asthma Specialist,Dermatologists",
      phon:283984999,
    }
    let data5={
      doctorImage:"assets/images/7.jpg",
      name:"Praveen Agrwal ",
      id : 6,
      Location: "Bhawarkua",
      Adress:"304 Bhawarkua indore 452001",
      specilist:"Adolescent medicine specialist,Addiction psychiatrist",
      phon:784927899,
    }
    let data6={
      doctorImage:"assets/images/2.jpg",
      name:"Anubha Gangrade",
      id : 7,
      Location: "Bhawarkua",
      Adress:"Red Crecent Clinic 54, Netaji Subhash Chandra Marg, Bhawarkua, Indore - 452001",
      specilist:"Adolescent medicine specialist,Paediatricians",
      phon:784927899,
    }
    let data7={
      doctorImage:"assets/images/7.jpg",
      name:"Dr. Praveen Agrawal",
      id : 8,
      Location: "Palasia",
      Adress:"New Palasia, Indore - 452001",
      specilist:"Orthopaedic Doctors,General Physician",
      phon:7849788999,
    }
    let data8={
      doctorImage:"assets/images/8.jpg",
      name:"Dr. Vivek Shrivastava",
      id : 9,
      Location: "Palasia",
      Adress:"Old Palasia, Indore - 452001",
      specilist:"Asthma Specialist,Anesthesiologist",
      phon:78556789,
    }
    let data9={
      doctorImage:"assets/images/10.jpg",
      name:"Dr. Girish Gupta",
      id : 10,
      Location: "Sapna Sangeeta Road",
      Adress:" Sapna Sangeeta Road, Indore - 452001",
      specilist:"Orthopaedic Doctors,Addiction psychiatrist",
      phon:7578566789,
    }
    let data10={
      doctorImage:"assets/images/D2.jpg",
      name:"Dr. Subodh Banzal",
      id : 11,
      Location: "Vijay Nagar",
      Adress:" 54, Vijay Nagar, Indore - 452010",
      specilist:"Endocrinologists, Orthopaedic Doctors,Anesthesiologist",
      phon:78678989,
    }
    let data11={
      doctorImage:"assets/images/11.jpg",
      name:"Dr. A K Jinsiwale ",
      id : 12,
      Location: "A B Road",
      Adress:" A B Road, Indore - 452011",
      specilist:"Orthopaedic Doctors,Diabetologist,Anesthesiologist",
      phon:7890867789,
    }
    let data12={
      doctorImage:"assets/images/12.jpg",
      name:"Dr. Rajeev Kelkar ",
      id : 13,
      Location: "Geeta Bhawan", 
      Adress:"GeetaBhawan Road, Geeta Bhawan, Indore - 452001",
      specilist:"Diabetologist,Paediatric Orthopaedic,Endocrinologists",
      phon:57888789,
    }
    let data13={
      doctorImage:"assets/images/21.jpg",
      name:" Dr.neelams ",
      id : 14,
      Location: "Bhawarkua",
      Adress:"Bhawarkua Road, Bhawar Kuan,Apple Hospital,Indore - 452001",
      specilist:"Orthopaedic Doctors, Homeopathy Beauty SKIN & HAIR,General Physician ",
      phon:784878999,
    }
    let data14={
      doctorImage:"assets/images/13.jpg",
      name:"Dr. Hussain Safderi",
      id : 15,
      Location: "Sapna Sangeeta Road",
      Adress:"Bansiwala Tower, Sapna Sangeeta Road, Indore - 452001",
      specilist:"Orthopaedic Doctors,Skin & Ortho,General Physician",
      phon:789356768,
    }
    let data15={
      doctorImage:"assets/images/14.jpg",
      name:"Dr. Rajesh Dashore",
      id : 16,
      Location: "M G Road",
      Adress:"Gorakund Chowraha, Mg Road, Indore - 452014",
      specilist:"Orthopaedic Doctors,Joint Replacement Surgery",
      phon:78344667,
    }
    let data16={
      doctorImage:"assets/images/15.jpg",
      name:"Dr. Pritesh Vyas ",
      id : 17,
      Location: "South Tukoganj",
      Adress:"Global SNG Hospital, South Tukoganj, Indore - 452001",
      specilist:"Orthopaedic Doctors,Addiction psychiatrist",
      phon:77889989,  
    }
    let data17={
      doctorImage:"assets/images/5.jpg",
      name:"Dr. Poonam Raikwar",
      id : 18,
      Location: "Ring Road",
      Adress:"New Indra Ekta Nagar, Ring Road, Pipliyahana, Indore - 452009",
      specilist:"Gynaecologist & Obstetrician Doctors,Endocrinologists,General Surgeon",
      phon:78429089,
    }
    let data18={
      doctorImage:"assets/images/16.jpg",
      name:"Dr. Pramod Neema",
      id : 19,
      Location: "Anpurana road",
      Adress:"Vijay Syndicate Colony, Anpurana road, Indore - 452009",
      specilist:"Orthopaedic Doctors,Joint Replacement Surgery",
      phon:7986556879,
    }
    let data19={
      doctorImage:"assets/images/18.jpg",
      name:"Dr. Prakash Bangani",
      id : 20,
      Location: "Anpurana road",
      Adress:" Anpurana road, Indore - 452009",
      specilist:"Orthopaedic Doctors,Anesthesiologist",
      phon:785566789,
    }
    let data20={
      doctorImage:"assets/images/19.jpg",
      name:"Dr. Sunil Rajan",
      id : 21,
      Location: "Vijay Nagar",
      Adress:"The Synergy Hospital, Vijay Nagar, Indore - 452010",
      specilist:"Orthopaedic Doctors,Joint Replacement Surgery",
      phon:736738739,
    }
    let data21={
      doctorImage:"assets/images/22.jpg",
      name:"Dr. Sunil Rajan ",
      id : 22,
      Location: "Navlakha",
      Adress:" Sapna Sangeeta Road, Navlakha, Indore - 452001,",
      specilist:"Diabetologist,Joint Replacement Surgery Doctors",
      phon:745465431,
    }
    let data22={
      doctorImage:"assets/images/D2.jpg",
      name:"Dr. Jeetendra Bhatnagar ",
      id : 23,
      Location: "Navlakha",
      Adress:" 2nd Floor, RNT Marg, Navlakha, Indore - 452001 Indore - 452001",
      specilist:"Orthopaedic,Arthritis Doctors,Diabetologist",
      phon:771218989,
    }
    let data23={
      doctorImage:"assets/images/D2.jpg",
      name:"Dr. Manish Shroff",
      id : 24,
      Location: "A B Road",
      Adress:"C/o CHL Hospital, A B Road,Near Lig Square, Indore - 452011",
      specilist:"Orthopaedic Doctors,Joint Replacement Surgery ",
      phon:728930989,
    }
    let data24={
      doctorImage:"assets/images/22.jpg",
      name:"Dr. Saurabh Gupta  ",
      id : 25,
      Location: "Anpurana road",
      Adress:"Bhawanipur Colony, Anpurana road, Indore - 452009",
      specilist:"Orthopaedic Doctors,Spine Surgeons,Asthma Specialist",
      phon:789556989,
    }
    let data25={
      doctorImage:"assets/images/19.jpg",
      name:"Dr.Manish Ladhania ",
      id : 26,
      Location: "Ring Road",
      Adress:"First Floor, Bombay Hospital, Ring Road, Indore - 452009",
      specilist:"Orthopaedic Doctors,Spine Surgeons,Joint Replacement Surgery Doctors",
      phon:895566955,
    }
    let data26={
      doctorImage:"assets/images/18.jpg",
      name:"Dr. Gajendra Vyas",
      id : 26,
      Location: "Anpurana road",
      Adress:"Shop No 61 B, Dayal Guru Gate Annapurna Road, Sudama Nagar, Indore - 452009, Near Bank Of Maharastra",
      specilist:"Homeopathic Doctors,Genenal physician Doctors,General Surgeon",
      phon:9827689991,
    }
    let data27={
      doctorImage:"assets/images/16.jpg",
      name:"Dr. Prashant Harit",
      id : 27,
      Location: "Bhawarkua",
      Adress:"22 Siddharth Nagar, Bhawarkua, Indore, Madhya Pradesh 452001",
      specilist:"Dermatologists,Anesthesiologist,Spine Surgeons",
      phon:9926679777,
    }
    let data28={
      doctorImage:"assets/images/5.jpg",
      name:"Dr Prerna Jain",
      id : 28,
      Location: "Palasia",
      Adress:"13/1, 206, Lakshya Badgara Crest, New Palasia, Indore - 452001, Near Corporation Bank Indore",
      specilist:"Obstetrician-gynecologist,Dermatologists ,Spine Surgeons",
      phon: 9993430909,
    }
    let data29={
      doctorImage:"assets/images/21.jpg",
      name:"Dr Roshani Jain",
      id : 29,
      Location: "Ring Road",
      Adress:" No.2132-D, Western Ring Road,Near JaroliyaMarket Sudama Nagar, Indore,  452009",
      specilist:"Eye Specialist",
      phon: 7314237678,
    }
    let data30={
      doctorImage:"assets/images/16.jpg",
      name:"Dr J S Kathpal",
      id : 30,
      Location: "Ring Road",
      Adress:" 8, Vishnu Puri Colony, Ring Road,Indore, Madhya Pradesh 452009",
      specilist:"Neurologist",
      phon:  7312476878,
    }
    let data31={
      doctorImage:"assets/images/3.jpg",
      name:"Dr Heena Bhandari",
      id : 31,
      Location: "Palasia",
      Adress:" 1, Shrinagar Annex, Old Palasia, Indore - 452001",
      specilist:"Eye Specialist",
      phon:  9152367610,
    }
    let data32={
      doctorImage:"assets/images/15.jpg",
      name:"Dr. P S Hardia",
      id : 32,
      Location: "Rau",
      Adress:" Infront Of Papaya Tree Hotel, A B Road, Rau, Indore - 453331, Bypass Rau Square",
      specilist:"Eye Specialist",
      phon:  9152954154,
    }
    let data33={
      doctorImage:"assets/images/14.jpg",
      name:"Dr. Manish Porwal",
      id : 33,
      Location: "Ring Road",
      Adress:" 37 FA , Scheme No. 94, Ring Road, Near Pipliyana Square, Near Ocean Motors, Indore, Madhya Pradesh 452001",
      specilist:"Cardiologist,Asthma Specialist ",
      phon:   7470890443,
    }
    let data34={
      doctorImage:"assets/images/13.jpg",
      name:"Dr. Sarita Rao",
      id : 34,
      Location: "Vijay Nagar",
      Adress:" Scheme No. 74c, Sector D, Vijay Nagar, Apollo Hospitals Indore, Indore, Madhya Pradesh 452010",
      specilist:"Cardiologist,Dermatologists",
      phon:  18605001066,
    }
    let data35={
      doctorImage:"assets/images/12.jpg",
      name:"Dr. Srikanth Reddys",
      id : 35,
      Location: "Vijay Nagar",
      Adress:" 25 LG, Cross Roads, G Sachanand Kala Mandir, Vijay Nagar, Indore - 452010 ",
      specilist:"Neurologist,Psychologist,Psychiatrist",
      phon:  9152324690,
    }
    let data36={
      doctorImage:"assets/images/11.jpg",
      name:"Dr. Pant",
      id : 36,
      Location: "A B Road",
      Adress:" 170 Anoop Nagar, Ab Road, A B Road LIG Colony, Indore - 452011, Near Life Line Hospital",
      specilist:"Dentist,Dental Surgeon",
      phon:  9152367795,
    }
    let data37={
      doctorImage:"assets/images/2.jpg",
      name:"Dr. Shilpa Thombre",
      id : 37,
      Location: "Rau",
      Adress:" 662, S-2, Amira Castle, Sch.no.114part-2, Rau, Indore - 453331, Behind Shalimar Township",
      specilist:"Dentist,Dental Surgeon",
      phon:  9152651129,
    }
    let data38={
      doctorImage:"assets/images/10.jpg",
      name:"Dr. Pramod Jhawar",
      id : 38,
      Location: "South Tukoganj",
      Adress:"  112,113,114,115, Navneet Plaza, 3, 16/2, Greater Kailash Road, South Tukoganj, Indore, Madhya Pradesh 452001",
      specilist:"Allergist,Asthma Specialist ",
      phon:  9827033089,
    }
    let data39={
      doctorImage:"assets/images/8.jpg",
      name:"Dr. Jatin Agarwal",
      id : 39,
      Location: "A B Road",
      Adress:"  A-9, Vasant Vihar Colony, A B Road,  Indore - 452011, Behind Satya Sai School, Near Bombay Hospital ",
      specilist:"Dentist,Dental Surgeon",
      phon:  9152362217,
    }
    let data40={
      doctorImage:"assets/images/7.jpg",
      name:"Dr S Z Jafrey",
      id : 40,
      Location: "Rau",
      Adress:"  Shahid Gautam Jain Marg, Rau, Indore, Madhya Pradesh 453331",
      specilist:" Asthma Specialist ,Allergist,Spine Surgeons",
      phon:  9300001393,
    }
    let data41={
      doctorImage:"assets/images/6.jpg",
      name:"Dr. V K Agrawal",
      id : 41,
      Location: "Sapna Sangeeta Road",
      Adress:"  Transport Nagar, Sapna Sangeeta,Indore, Madhya Pradesh 452007",
      specilist:"Allergist,Asthma Specialist ",
      phon:  9826066994,
    }
    let data42={
      doctorImage:"assets/images/5.jpg",
      name:"Dr Hussain Shakir",
      id : 42,
      Location: "M G Road",
      Adress:"  515, G G S Market, Sinmagla M G Road, Mechanic Nagar, Mechanic Nagar, Indore, Madhya Pradesh 452014",
      specilist:"Neurologist,Homeopatheic,General Surgeon",
      phon:  7312434004,
    }
    let data43={
      doctorImage:"assets/images/15.jpg",
      name:"Dr Vasant Dakawale",
      id : 43,
      Location: "M G Road",
      Adress:"  14, Bansi Plaza, 1st Floor, 581, M G Road, Opp Indraprastha Tower, Indore, Madhya Pradesh 452014",
      specilist:"Neurologist",
      phon:  7312594965,
    }
    let data44={
      doctorImage:"assets/images/6.jpg",
      name:"Dr. K.L. Prajapati",
      id : 44,
      Location: "South Tukoganj",
      Adress:"  14/3, Trade House, Near Hans travels,South Tukoganj Indore",
      specilist:"General Physician,Diabetologist, Cardiologist ",
      phon:  7312594758,
    }
    let data45={
      doctorImage:"assets/images/10.jpg",
      name:"Dr Brajeshlal",
      id : 45,
      Location: "Geeta Bhawan",
      Adress:" 206, Apollo Trade Centre, Geeta Bhavan Chowk, Geeta Bhawan, Indore, Madhya Pradesh 452001",
      specilist:"General Physician,General Surgeon",
      phon:  9827034011,
    }
    let data46={
      doctorImage:"assets/images/D2.jpg",
      name:"Dr Ajay Agrawal",
      id : 46,
      Location: "Geeta Bhawan",
      Adress:"  B-2, Alankar Point, Geeta Bhawan Rd, Indore, Madhya Pradesh 452001",
      specilist:"ENT/ Otorhinolaryngologist,Asthma Specialist ",
      phon:  9827032526,
      
    }
    let data47={
      doctorImage:"assets/images/D2.jpg",
      name:"Dr Anil Dashore",
      id : 47,
      Location: "Rajwada",
      Adress:"  Ashoka Heritage, 1Floor, In Front Of State Bank Of India, Rajwada, Indore, Madhya Pradesh 452001",
      specilist:"Dermatologist,Addiction psychiatrist",
      phon:  7312435533,
    }
    let data48={
      doctorImage:"assets/images/11.jpg",
      name:"Dr Navnit Jain",
      id : 48,
      Location: "Rajwada",
      Adress:"  335, Unique Hospital Jawahar Marg, Near Hotel World, Rajwada, Indore, Madhya Pradesh 452001",
      specilist:"ENT/ Otorhinolaryngologist,General Surgeon",
      phon:  7312538879,
      
    }
    let data49={
      doctorImage:"assets/images/22.jpg",
      name:"Dr. Aashutosh Parashar",
      id : 49,
      Location: "Rajendra Nagar",
      Adress:"  Rajendra Nagar Main Rd, Dhanwantri Nagar, Rajendra Nagar, Indore, Madhya Pradesh 452012",
      specilist:"Homoeopathic,General Surgeon,ENT/ Otorhinolaryngologist",
      phon:  9826247391,
    } 

this.doctorlist = [data, data1, data2, data3, data4, data5, data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,data21,data22,data23,data24,data25,data26,data27,data28,data29,data30,data31,data32,data33,data34,data35,data36,data37,data38,data39,data40,data41,data42,data43,data44,data45,data46,data47,data48,data49];
  }


  getDoctorsList(location){
    if(this.selectedTypesDoctors && this.selectedTypesDoctors[0]){
      console.log('selectedLocation', location);
      this.selectedLocationDoctors = [];
      this.selectedDoctos = [];
      this.selectedTypesDoctors.forEach((element, index) => {
        //console.log(element, index);
       if(element.Location == location){
         this.selectedLocationDoctors.push(element);
         
         console.log('I got location',this.selectedLocationDoctors);
       }
       //this.selectedLocationDoctorsFilter  = this.selectedLocationDoctors;
       this.selectedDoctos = this.selectedLocationDoctors;
            });
    }else{
      console.log('selectedLocation', location);
      this.selectedLocationDoctors = [];
      this.selectedDoctos = [];
      this.doctorlist.forEach((element, index) => {
        //console.log(element, index);
       if(element.Location == location){
         this.selectedLocationDoctors.push(element);
         
         console.log('I got location',this.selectedLocationDoctors);
       }
       //this.selectedLocationDoctorsFilter  = this.selectedLocationDoctors;
       this.selectedDoctos = this.selectedLocationDoctors;
            });
    }

  }


          getTypesList(types){
            if(this.selectedLocationDoctors && this.selectedLocationDoctors[0]){
              console.log('selectedTypes if', types);
              this.selectedTypesDoctors = [];
              this.selectedLocationDoctors.forEach((element, index) => {
                console.log(element, index);
               if(element['specilist'].indexOf(types) > -1){
                 this.selectedTypesDoctors.push(element);
                 console.log('I got types',this.selectedTypesDoctors);
               }
              // this.selectedLocationDoctorsFilter  = this.selectedLocationDoctors;
              this.selectedDoctos = this.selectedTypesDoctors;
                    });
            }else{
              console.log('selectedTypes else', types);
              this.selectedTypesDoctors = [];
              this.doctorlist.forEach((element, index) => {
                //console.log(element, index);
               if(element['specilist'].indexOf(types) > -1){
                 this.selectedTypesDoctors.push(element);
                 console.log('I got types',this.selectedTypesDoctors);
               }
              // this.selectedLocationDoctorsFilter  = this.selectedLocationDoctors;
              this.selectedDoctos = this.selectedTypesDoctors;
                    });
            }

  }
  onClickMe() {
    
    this.router.navigate(['/BookAppointment']);
  }
  onChangeObj(docotInfo){
    this.notcheck = true;
    this.myid = docotInfo.id
    console.log(docotInfo);
    this.selectedLocationDoctors=[];
    this.selectedLocationDoctors.push(docotInfo); 
    this.selectedTypesDoctors=[];
    this.selectedTypesDoctors.push(docotInfo);
    }
    
   }

