Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photo" src="'+data_uri+'">';
    });
}

console.log(ml5.version);

link=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/k2LmR2qOv/model.json',modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById('photo');
    link.classify(img, gotResult);
}

function gotResult(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=Math.floor(results[0].confidence*100)+'%';
    }
}