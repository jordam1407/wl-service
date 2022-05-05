import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react from 'react'
import { useState } from 'react'
import {} from '../service/firebase'
import { getFirestore, doc, addDoc, collection} from 'firebase/firestore'





//SSR - Server side Rendering. Renderiza no momento da solicitação.

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default function Home() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [social, setSocial] = useState('')
  const [plat, setPlat] = useState('')




  //add new document on firestore.

const firestore = getFirestore();

const clientes = collection(firestore, 'clientes')

function gravarClientes() {
    const newDoc = addDoc(clientes, {
        Nome: nome,
        Email: email,
        Social: social,
        Plataforma: plat,
        Data: Date()
    });


}

// Some of those objects its pointless lol. but i dont want to delete it.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
      gravarClientes();
      
     
      // Get data from the form.
      var data = {nome, email, social, plat}
        console.log(data)
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form'

      const reset = event.target.reset()
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options, reset)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`We'll get in touch soon ${result.data}`)
    }


  return (



    <div className={styles.landing}>
         <Image className={styles.bgbox}
        src='/images/fundoAzul.png'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        />
      
        <Head>
          <title>Ultimate Team WL service</title>
          <meta name="description" content="We  do your FUT CHAMPIONS WL games, get more fifa coins and Packs, without the stress of playing WL" />
        </Head>

        <div className={styles.box}>
        <Image className={styles.bgbox}
        src='/images/fundoAzul.png'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      
        />
        <div className={styles.title}>
          WL SERVICE
          <br></br><a>WE PLAY FOR YOU</a>
        </div>

        <div className={styles.meio}>

          <img className={styles.layout} src='../images/fundoRosa.png' />
          <img className={styles.borda} src='../images/lateral.png' />
          <img className={styles.fifa} src='../images/fifa.png' />
          <img className={styles.logo1} src='../images/wl.png' />

          <h2 className={styles.chamada}>
            OUT OF TIME TO PLAY?
            <br></br><a>Our team are ready to play for you!</a>
          </h2>
          <h2 className={styles.chamada2}>
            GAMES ARE HARD?
            <br></br><a>We make it easy for you!</a>
          </h2>
          <h2 className={styles.chamada3}>
            WANT TO GET GOOD REWARDS?
            <br></br><a>With us you have your best chance!</a>
          </h2>

        </div>

        <div className={styles.baixo}>
          <img className={styles.seta} src='../images/seta.png' />
          <div className={styles.boxes}>
            <h2 className={styles.best}>
              GET THE BEST REWARDS
              <br></br><a>With the fairest prices!</a>
            </h2>

            <div className={styles.boxA}>
              <p className={styles.point}>51 POINTS</p>
              <p className={styles.parA}>
                1 Ultimate pack<br></br>
                1 Rare Players Pack<br></br>
                3 TOTW playerpick<br></br>
                1 TOTW Pack<br></br>
                40k coins<br></br>
                £60 worth of packs*<br></br>
                <a className={styles.aa}>QUALIFICATION for FREE</a>
              </p><p className={styles.euro}>£40</p>
            </div>

            <div className={styles.boxB}>
              <p className={styles.point}>60 POINTS</p>
              <p className={styles.parB}>
                1 Ultimate pack<br></br>
                1 Jumbo rare pack<br></br>
                3 TOTW playerpick<br></br>
                1 TOTW Pack<br></br>
                50k coins<br></br>
                £65 worth of packs*<br></br>
                <a className={styles.aa}>QUALIFICATION for FREE</a>
              </p>
              <p className={styles.euro}>£50</p>
            </div>

            <div className={styles.boxC}>
              <p className={styles.point}>67 POINTS</p>
              <p className={styles.parC}>
                1 Ultimate pack<br></br>
                2 Rare Players Pack<br></br>
                3 TOTW playerpick<br></br>
                2 TOTW Pack<br></br>
                75k coins<br></br>
                £75 worth of packs*<br></br>
                <a className={styles.aa}>QUALIFICATION for FREE</a>
              </p>
              <p className={styles.euro}>£60<br></br>

              </p>
            </div>
          </div>
          <p className={styles.star}>
            *This is how much would cost if bougth with FIFA POINTS at store.<br></br>
            **For higher qualifications consult on CONTACT ME BUTTON.
          </p>
          <h2 className={styles.book}>
            BOOK NEXT WL NOW
            <br></br><a>Earn one month of trading<br></br> group FOR FREE</a>
          </h2>
          <div className={styles.input1}>
            <form className={styles.input} onSubmit={handleSubmit}>

              <label htmlFor="name"></label>
              <input className={styles.retangulo1} autoComplete= "off" type="text" id="name" name="name" placeholder='Full Name' onChange={event => setNome(event.target.value)} required />

              <label htmlFor="email"></label>
              <input className={styles.retangulo}autoComplete= "off" type="email" id="email" name="email" placeholder='Email' onChange={event => setEmail(event.target.value)} required />

              <label htmlFor="social"></label>
              <input className={styles.retangulo2}autoComplete= "off" type="text" id="social" name="social" placeholder='Facebook, Instagam, WhatsApp' onChange={event => setSocial(event.target.value)} required />
              

              <div className={styles.plat}>
                <label htmlFor="plat"></label>
                <input type="radio" value="Playstation" name="plat" onChange={event => setPlat(event.target.value)} required /> Playstation<br></br>

                <label htmlFor="plat"></label>
                <input type="radio" value="Xbox" name="plat" onChange={event => setPlat(event.target.value)} required /> Xbox
              </div>
              <button className={styles.submit} type="submit">BOOK NOW</button>
            </form>

          </div>
          <div className={styles.contato}>
            <p className={styles.info}>
              Check it out my social media below:
            </p>
            <div className={styles.contact}>

              <a
                href='https://www.messenger.com/t/100004089729029'
                target={"_blank"}
                rel={"noreferrer"}>
                <img className={styles.social} src='../images/messenger.png' />
              </a>

              <a
                href='https://api.whatsapp.com/send?phone=5531975222507&text=Welcome!%20place%20your%20questions%20here!'
                target={"_blank"}
                rel={"noreferrer"}>
                <img className={styles.social1} src='../images/whatsapp.png' />
              </a>

              <a
                href='https://www.twitch.tv/jordam1407'
                target={"_blank"}
                rel={"noreferrer"}>
                <img className={styles.social2} src='../images/twitch.png' />
              </a>

              <a
                href='https://twitter.com/jordam_mp'
                target={"_blank"}
                rel={"noreferrer"}>
                <img className={styles.social3} src='../images/twitter.png' />
              </a>

              <a
                href='https://www.instagram.com/jordammendes/'
                target={"_blank"}
                rel={"noreferrer"}>
                <img className={styles.social4} src='../images/instagram.png' />
              </a>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
