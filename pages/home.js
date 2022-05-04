import styles from '../styles/Home.module.css'

function index() {
    return <div className={styles.teste}>
        WL Service
    </div>
}
//SSR - Server side Rendering. Renderiza no momento da solicitação.

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
export default index;