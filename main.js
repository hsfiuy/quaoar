Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach( 'camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="' + data_uri + '" />';
        
    });
}
console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xrO713G27/model.json', modelLoaded);
function modelLoaded(){
    console.log('model Loaded')
}

function check(){
    img = document.getElementById("capture_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
if (error){
    console.log(error);
}else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML=results[0].label; 
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
function getEws(){
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}