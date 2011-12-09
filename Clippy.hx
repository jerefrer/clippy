import flash.display.MovieClip;
import flash.events.MouseEvent;
import flash.display.SimpleButton;
import flash.external.ExternalInterface;

class ButtonUp extends MovieClip {}
class ButtonOver extends MovieClip {}
class ButtonDown extends MovieClip {}

class Clippy {

  static var text:String;
  static var overCallback:String;
  static var outCallback:String;
  static var clickCallback:String;
  static var button:SimpleButton;

  static function triggerCallback(theCallback) {
    if(ExternalInterface.available) {
      ExternalInterface.marshallExceptions = true;
      if(theCallback != '' && theCallback != null) {
        ExternalInterface.call(theCallback);
      }
    }
  }

  static function overFunction (e:MouseEvent) {
    triggerCallback(overCallback);
  }

  static function outFunction (e:MouseEvent) {
    triggerCallback(outCallback);
  }

  static function downFunction (e:MouseEvent) {
    flash.system.System.setClipboard(text);
    triggerCallback(clickCallback);
  }

  // Main
  static function main() {
    text = flash.Lib.current.loaderInfo.parameters.text;
    overCallback = flash.Lib.current.loaderInfo.parameters.overCallback;
    outCallback = flash.Lib.current.loaderInfo.parameters.outCallback;
    clickCallback = flash.Lib.current.loaderInfo.parameters.clickCallback;
        
    // button
    button = new SimpleButton();
    button.useHandCursor = true;
    
    button.upState = new ButtonUp();
    button.overState = new ButtonOver();
    button.downState = new ButtonDown();
    button.hitTestState = new ButtonDown();
    
    button.addEventListener(MouseEvent.MOUSE_OVER, overFunction );
    button.addEventListener(MouseEvent.MOUSE_OUT,  outFunction  );
    button.addEventListener(MouseEvent.MOUSE_DOWN, downFunction );
    
    flash.Lib.current.addChild(button);
  }
}
