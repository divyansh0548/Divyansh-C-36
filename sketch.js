var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var game;

function preload() {
  backgroundImage = loadImage("assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
 
 

}

function draw() {
  background(backgroundImage);
}

