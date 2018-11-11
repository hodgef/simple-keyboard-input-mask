import Keyboard from 'simple-keyboard';
import SimpleKeyboardInputMask from './InputMask';


it('Keyboard renders without crashing', () => {
  const div = document.createElement('div');
  
  div.className += "simple-keyboard";
  document.body.appendChild(div);

  let keyboard = new Keyboard({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    inputMask: "(99) 9999-9999",
    modules: [
      SimpleKeyboardInputMask
    ],
  });
});