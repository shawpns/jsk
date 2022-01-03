# Parking-Solutions
Parking Solutions using Arduino Uno

**ABSTRACT**

Parking project aims at providing a confusion free and easy parking.
•	This project helps the drivers of the cars to park their vehicles with minimum wastage of time with accurate information of the availability of the space to park.
•	It includes an Arduino Uno as the microcontroller unit to which the servo motors, LCD display ultrasonic sensors (HC-05) are interfaced. The LCD displays the availability of the space, the ultrasonic sensors keeps the check of the number of cars entering and exiting the parking space. The ultrasonic sensors detect the availability of the parking space.

**THEORY**

•	The system counts the number of cars in the garage and checks if there’s any vacancy.
•	There’s an entry and exit path. When vehicle enters, the display shows the number of cars inside. When any vehicle leaves, the count decreases and shown on display.
•	If the garage is full. The display will show a message regarding that. 
•	This whole process includes the use of Arduino.

**Hardware Design**

1.	Arduino UNO
2.	Two IR Proximity Sensor
3.	16×2 LCD and an I2C module
4.	Bread Board
5.	SG90 Micro-servo motor
6.	Jumper Wires
7.  Power Supply
8.  Arduino IDE
9.  USB cable for uploading the code

**Block Diagram**

![Block_diagram](https:nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn.jpg)


**SOURCE CODE**

``` // TECHATRONIC.COM  
 // I2C LIBRARY  
 //https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library  
 #include <Wire.h>           
 #include <LiquidCrystal_I2C.h>    
 LiquidCrystal_I2C lcd(0x27,16,2);   
 #include <Servo.h>   
 Servo myservo1;  
 int IR1 = 4; // IR Sensor 1  
 int IR2 = 7; // IR Sensor 2  
 int Slot = 4;      //Enter Total number of parking Slots  
 int flag1 = 0;  
 int flag2 = 0;  
 void setup()  
 {  
  lcd.init();      
  lcd.backlight();  
 pinMode(IR1, INPUT);  
 pinMode(IR2, INPUT);  
 myservo1.attach(9);  
 myservo1.write(100);  
 lcd.setCursor (0,0);  
 lcd.print("   ARDUINO  ");  
 lcd.setCursor (0,1);  
 lcd.print(" PARKING SYSTEM ");  
 delay (2000);  
 lcd.clear();   
 }  
 void loop(){   
 if(digitalRead (IR1) == LOW && flag1==0){  
 if(Slot>0){flag1=1;  
 if(flag2==0){myservo1.write(0); Slot = Slot-1;}  
 }else{  
 lcd.setCursor (0,0);  
 lcd.print("  SORRY 🙁  ");   
 lcd.setCursor (0,1);  
 lcd.print(" Parking Full ");   
 delay (3000);  
 lcd.clear();   
 }  
 }  
 if(digitalRead (IR2) == LOW && flag2==0){flag2=1;  
 if(flag1==0){myservo1.write(0); Slot = Slot+1;}  
 }  
 if(flag1==1 && flag2==1){  
 delay (1000);  
 myservo1.write(100);  
 flag1=0, flag2=0;  
 }  
 lcd.setCursor (0,0);  
 lcd.print("  WELCOME!  ");  
 lcd.setCursor (0,1);  
 lcd.print("Slot Left: ");  
 lcd.print(Slot);  
 }  
 ```

**System Testing**

We have tested the design system with a dummy car. There are usually two possibilities.
•	Entry : While entering, the car is noticed by the IR Proximity Sensors. Firstly the outer IR Proximity Sensor and then the inner IR Proximity Sensor. The count increases and result is shown in display.
•	Exit : In this case, Firstly the inner IR Proximity Sensor notices and then the inner IR Proximity Sensor. The count decreases and result is shown in display.

**Prototype**

![prototype](https:bcbc.jpg)



**Experimental Results**

We have experimented the system to gather some statistical results. After the experience, we have found the inner IR Proximity Sensor and outer IR Proximity Sensor works perfectly. As the result shows, the system is almost 100% correct. The whole experiment was done couple of times by us. Dummy cars were used. The prototype was not always correct due to the limitations of the use of low quality sensors. But the performance was satisfactory enough.

**References**

<<................LINKS.......................>>
