<?php
    function compensate($val) {
        if ($val < 10) {
            $val = "0".$val;
        }
        return $val;
    }

    $hour = $_GET['hh'];
    $min = $_GET['mm'];
    $sec = $_GET['ss'];
//     $title = $_GET['tt'];
//     $content = $_GET['cc'];

    if ($sec < 55) {
        $secE = $sec + 5;
    } else {
        $secE = $sec - 55;
        if ($min != 59) {
            $minE = $min + 1;
        } else {
            $minE = 0;
            $hourE = $hour + 1;
        }
    }

      $hour = compensate($hour);
      $min = compensate($min);
      $sec = compensate($sec);
      $hourE = compensate($hourE);
      $minE = compensate($minE);
      $secE = compensate($secE);
    
    $start = $hour.":".$min.":".$sec.".000";
    $end = $hourE.":".$minE.":".$secE.".000";

    $doc = "\n\n".$start." --> ".$end." line:1 position:99% align:end size:50%\n테스트";

    $fileName = "subtitle_kr.vtt";

    $fh = fopen($fileName, 'a'); 
    fwrite($fh, $doc);
    fclose($fh);

    echo "<script>window.location.replace('webvttTest.html');</script>";
?>