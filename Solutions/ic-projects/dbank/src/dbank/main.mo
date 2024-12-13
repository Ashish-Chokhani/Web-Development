import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank {
  stable var currentValue : Float = 300;
  currentValue := 200;
  // currentValue := 100;
  stable var startTime = Time.now();
  startTime := Time.now();
  Debug.print(debug_show(startTime));

  let id = 98757750986858;
  // Debug.print(debug_show(id));

  public func topUp(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };
  //topUp();

  public func withdraw(amount : Float) {
    let tempValue : Float = currentValue -amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Out of Bounds");
    };
  };

  public query func checkBalance() : async Float{
    return currentValue;
  };

  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNs=currentTime-startTime;
    let timeElapsedS =timeElapsedNs/1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };
}
