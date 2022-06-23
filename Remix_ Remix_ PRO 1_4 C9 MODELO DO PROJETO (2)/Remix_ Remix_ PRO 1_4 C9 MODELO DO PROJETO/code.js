var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4ab999e6-9bd1-4ed5-8f24-9b3aaaa18a26","a81d0b3c-c23e-40e9-876c-fe72de753b25","a82075ed-6316-4576-93d9-7dde8dbe83d0","75985095-1ab5-4938-a9ad-1c7f0e22cf9b","cd041164-0a74-40e6-afec-183fb862a69d"],"propsByKey":{"4ab999e6-9bd1-4ed5-8f24-9b3aaaa18a26":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"a81d0b3c-c23e-40e9-876c-fe72de753b25":{"name":"nave","sourceUrl":null,"frameSize":{"x":400,"y":248},"frameCount":1,"looping":true,"frameDelay":12,"version":"sopWtMJJO7tmi_c2gSILgqpcYR1xDlEu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":248},"rootRelativePath":"assets/a81d0b3c-c23e-40e9-876c-fe72de753b25.png"},"a82075ed-6316-4576-93d9-7dde8dbe83d0":{"name":"2021","sourceUrl":"assets/api/v1/animation-library/gamelab/yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H/category_retro/retrocreature_20.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H/category_retro/retrocreature_20.png"},"75985095-1ab5-4938-a9ad-1c7f0e22cf9b":{"name":"2020","sourceUrl":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png"},"cd041164-0a74-40e6-afec-183fb862a69d":{"name":"2022","sourceUrl":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var terra = createSprite(200,200);
terra.setAnimation("fundo");
 
var car = createSprite(200,345,200,345);

var desafio1 = createSprite(200,250,10,10);

var desafio2 = createSprite(200,150,10,10);

var desafio3 = createSprite(200,50,10,10);

var net = createSprite(200,5,200,20);
net.shapeColor="red";

var goal =0;
var death = 0;

car.setAnimation("nave");
car.scale=.2;
desafio1.setAnimation("2020");
desafio1.scale=.1;
desafio2.setAnimation("2021")
desafio2.scale=.1;
desafio3.setAnimation("2022");
desafio3.scale=.1;

desafio1.setVelocity(-10,0);
desafio2.setVelocity(10,0);
desafio3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




desafio1.bounceOff(edges)
desafio2.bounceOff(edges)
desafio3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  car.y=car.y-3
}

if(keyDown(DOWN_ARROW)){
  car.y=car.y+3
}

if(keyDown(LEFT_ARROW)){
  car.x=car.x-3
}

if(keyDown(RIGHT_ARROW)){
  car.x=car.x+3
}

if(car.isTouching(desafio1)|| car.isTouching(desafio2)|| car.isTouching(desafio3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  car.x=200
  car.y=350
  death = death+1
}
if(car.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  car.x=200
  car.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
