import { PureComponent } from 'react';
// import { Provider } from 'react-redux';
import getStore from '../../util';

import './App.style.scss';

export class App extends PureComponent {
  __construct(props) {
    super.__construct(props);

    this.reduxStore = getStore();
  }

  // render() {
  //   return (
  //     <Provider store={ this.reduxStore }>
  //       <div className="App">
  //         <div>
  //           <p>Hello World</p>
  //         </div>
  //       </div>
  //     </Provider>
  //   );
  // }

  render() {
    return (
      <div className="App">
        <div>
          <p>Hello World</p>
        </div>
      </div>
    );
  }
}

export default App;
