import React, { Component } from "react";
import BlackandWhite from '../images/B&W_bg.jpg';
import PeakImage from '../images/PEAK_PNG.png';
import styles from './Hello.module.css'



class HelloWorld extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{ backgroundColor: "#cd0032",padding:'12px 10px 0px 10px' }}>
          <div className="col-3 pr-4">
            <div className="row">
            <div className="col greybar"
              style={{
                height: "50px",
                //width: "50px",
                backgroundColor: "#555",
                marginTop: "12px",
                marginBottom: "12px",
                marginLeft:'10px',
                
              }}
            ></div>


            </div>
            
          </div>

          <div className={"col "+styles.searchbar}>
            <div
              style={{
                height: "50px",
               // width: "200px",
                backgroundColor: "#a00028",
                marginTop: "12px",
                marginBottom: "12px"
              }}
            ></div>
          </div>
        </div>

        <div
          className="row"
          style={{ backgroundColor: "#a00028", height: "38px" }}
        >
          <div className="col"></div>
        </div>

        <div
          className="row" style={{marginTop:-12}}
        >
        <div className="col" style={{backgroundImage:`url(${BlackandWhite})`,backgroundRepeat:'no-repeat',height:'380px',backgroundSize:'cover',backgroundPosition:'right'}}>

          <span className={styles.spantext}>Save 10% </span>
          <span className={styles.spantext2}>Ipsum delicata sed ex</span>
          <img src={PeakImage} className={styles.image}/>
        </div>
        </div>

        <br />
        <br />
        <div className={"row"+ ` ${styles.row}`} >
          <div
            className={" col-md-5 col-lg" +` ${styles.column}`}
            style={{
             // margin: "0px 10px 0px 10px",
              backgroundColor: "#35d2b3",
             // height: "50px",
              borderRadius: "10px",
             
            }}
          ><p className={styles.tabletext} >#35D2B3</p></div>
        

          <div className="col-1 d-lg-none"></div>
          <br />
        
          <div
            className={" col-md-5 col-lg"+` ${styles.column}`}
            style={{
             // margin: "0px 10px 0px 10px",
              backgroundColor: "#1b2191",
              // height: "50px",
              borderRadius: "10px"
            }}
          ><p className={styles.tabletext} >#1B2191</p></div>
        

        <br />

        
          <div
            className={" col-md-5 align-self-center mt-md-3 mt-lg-0 col-lg"+` ${styles.column}  ${styles.extratab}` } //margin top of 3 in md size and above
            style={{
             
              backgroundColor: "#d823ee",
              borderRadius: "10px"
              
            }}
          ><p  className={styles.tabletext}>#D823EE</p></div>
        

        <br />

        
          <div
            className={"col-md d-md-none" + ` ${styles.column}`} //display:none for size md and above
            style={{
            
              backgroundColor: "#057bad",
              
            }}
          ></div>

         </div> 
        

        <br />
        <div className={"row "+ `${styles.footer}`}  style={{backgroundColor: '#272727'}}>
          <div className={"col-sm-12 col-md col-lg-6 mt-3 "+styles.footerLeft}>
            <div className="row">
              <div className="col" style={{display:'flex',justifyContent:'center'}}>
              <p style={{color:'white',fontWeight:'bold',fontSize:20}}>Left Footer Link</p>

              </div>
            </div>

            <div className="row">
              <div className="col" style={{display:'flex',justifyContent:'center'}}>
              <p style={{color:'white'}}>Left Footer Link ONE</p>

              </div>
            </div>


            <div className="row">
              <div className="col" style={{display:'flex',justifyContent:'center'}}>
              <p style={{color:'white'}}>Left Footer Link TWO</p>

              </div>
            </div>

            <br/>
            </div>

            <div className={"col-sm-12 col-md col-lg-6 mt-3 "+styles.footerRight}>
            <div className="row">
              <div className="col" style={{display:'flex',justifyContent:'center'}}>
              <p style={{color:'white',fontWeight:'bold',fontSize:20}}>Right Footer Links</p>

              </div>
            </div>


            <div className="row">
              <div className="col" style={{display:'flex',justifyContent:'center'}}>
              <p style={{color:'white'}}>Right Footer Link ONE</p>

              </div>
            </div>

            
            <div className="row">
              <div className="col" style={{display:'flex',justifyContent:'center'}}>
              <p style={{color:'white'}}>Right Footer Link TWO</p>

              </div>
            </div>
          

          </div>

         
        </div>
      </div>
    );
  }
}

export default HelloWorld;
