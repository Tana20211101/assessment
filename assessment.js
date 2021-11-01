'use strict'

  //結果表示エリアを表示
  
  //jsでタグ連携
  
  //ボタンクリックで処理実行


  const userNameInput = document.getElementById('user-name');
  const assessmentButton = document.getElementById('assessment');
  const resultArea = document.getElementById('result-area');
  const tweetArea = document.getElementById('tweet-area');

  // assessmentButton.onclick = () =>{
  //   const userName = userNameInput.value;
  //   if (userName === 0) {
  //     return;
  //   }
  //   console.log(userName);
  // }

  assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName === 0){
      return;
    }
    console.log(userName);
    // const header = document.createElement('h3');
    // header.innerText = '診断結果';
    // resultArea.appendChild(header);
  
    // const paragraph = document.createElement('p');
    // const result = assessment(userName);
    // paragraph.innerText = result;
    // resultArea.appendChild(paragraph);

    //まず要素を作って（ここではh3、p）、定数に入れる
    //文字列を入れて
    //appendChild(定数)でHTMLに追加

    resultArea.innerText = '';
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultArea.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultArea.appendChild(paragraph);

     // ツイートエリアの作成
    // tweetArea.innerText = "";
    // const anchor = document.createElement('a');
    // const hrefValue =
    //   'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';
    // anchor.setAttribute('href', hrefValue);
    // anchor.className = 'twitter-hashtag-button';
    // anchor.setAttribute('data-text', result);
    // anchor.innerText = 'Tweet #あなたのいいeeeeところ';
    // tweetArea.appendChild(anchor);
    //   // widgets.js の設定
    // const script = document.createElement('script');
    // script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    // tweetArea.appendChild(script);

    tweetArea.innerText = "";
    const anchor = document.createElement('a');
    const hrefValue ='https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText('Tweet #あなたのいいところ');
    tweetArea.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', "https://platform.twitter.com/widgets.js");
    tweetArea.appendChild(script);
    
  }





const answers = [
  '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
  '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
  '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
  '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
  '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
  '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
  '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
  '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
  '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
  '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
  '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
  '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
  '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
  '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
  '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
  '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
]

function assessment (userName) {
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode += userName.charCodeAt(i);
  }
  const index = sumOfCharCode % userName.length;
  let result = answers[index];
  result = result.replaceAll('{userName}', userName);

  return result;
}

console.log(assessment('3333'));
