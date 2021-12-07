difference=0;
right_wrist_x=0;
left_wrist_x=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,70)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#ff7b00');
    textSize(difference);
    fill('#00f02c');
    text('Arunisha',50,400);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    right_wrist_x = results[0].pose.rightWrist.x;
    left_wrist_x = results[0].pose.leftWrist.x;
    difference = left_wrist_x-right_wrist_x;
    }
}