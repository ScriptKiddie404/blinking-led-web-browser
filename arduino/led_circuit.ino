const byte led = 3;
void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop() {

  if(Serial.available() > 0){
    char lectura = Serial.read();
    if(lectura == '1'){
      Serial.println(lectura);
      digitalWrite(led, HIGH);
    }else if(lectura == '0'){
      Serial.println(lectura);
      digitalWrite(led, LOW);
    }
  }

}
