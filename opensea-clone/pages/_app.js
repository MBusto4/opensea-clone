import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

/* 
  * Chain ID 4 represents the Rinkeby network
  * The injected connector is a web3 connection method used by Metamask
*/
const supportedChainIds = [4]
const connectors = {
  injected: {}
}

function MyApp({ Component, pageProps }) {
  return (
    //Wrapping the whole app in the ThirdwebWeb3Provider
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )

}

export default MyApp
