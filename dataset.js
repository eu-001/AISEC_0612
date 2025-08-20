//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets = [];
class DataSet {
  constructor(sub_title, menuNum) {
    this.sub_title = sub_title;
  }
  user_fill = "";
  sub_content = [];
  sub_img = [];
  set_content(content) {
    this.sub_content.push(content);
  }
  set_img(num, obj) {
    if (!this.sub_img[num]) {
      this.sub_img[num] = [];
    }
    this.sub_img[num].push(obj);
  }
  set_fill(ufill) {
    this.user_fill = ufill;
  }
}

//d1.set_img(0, { imgtitle: "", imgurl: "", imglog: "", sourceurl: "" })
let d1 = new DataSet("로또번호 예측 선형회귀분석"); //메인 타이틀 //메뉴번호
d1.set_content("LSTM 모델과 ConvLSTM1D 모델의 로또 번호 회귀분석"); //서브 타이틀
//https://drive.google.com/file/d/12A_zsPaUPzFvI15ltJ3ggQj-wt7cSjHY/view?usp=drive_link
d1.set_img(0, {
  imgtitle: "1.원천데이터수집",
  imgurl:
    "https://drive.google.com/file/d/12A_zsPaUPzFvI15ltJ3ggQj-wt7cSjHY/view?usp=drive_link",
  imglog: "로또365페이지를 이용하여 1회차 ~ 1183회차 로또 당첨번호 수집",
  sourceurl: "https://dhlottery.co.kr/gameResult.do?method=byWin",
});
d1.set_img(0, {
  imgtitle: "2.데이터변환",
  imgurl:
    "https://drive.google.com/file/d/1ec8JsxS6NlXwg3i6DbVseMchQ9vw6ybv/view?usp=drive_link",
  imglog:
    "xlsx 형식의 데이터를 pandas 에서 로딩하기 편리하도록 csv 파일로 변환 ",
  sourceurl: "",
});
d1.set_img(0, {
  imgtitle: "3.csv파일읽기와 시계열데이터생성 모듈 구성",
  imgurl:
    "https://drive.google.com/file/d/1q8j5i4Rr011WtRm0pjSVsWTNwzURfiX5/view?usp=drive_link",
  imglog:
    "DAS에 저장된 csv 파일 불러오는 readFileData모듈과 시간 스탭에 따른 시계열 데이터 생성 모듈 구현",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
//https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb
d1.set_img(0, {
  imgtitle: "4.데이터전처리",
  imgurl:
    "https://drive.google.com/file/d/11CWmqUOHNpOq8-bUXBo4YhOtUFFrCnDe/view?usp=drive_link",
  imglog: "환경상수설정 및 날짜데이터 변환과 밀리타임 필드 추가",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_img(0, {
  imgtitle: "5.데이터분석및통계",
  imgurl:
    "https://drive.google.com/file/d/1nwGuRiS5VUzKjmjx44yTGOQNIO-W1tLc/view?usp=drive_link",
  imglog:
    "데이터 박스플롯과 히스토그램으로 데이터 분포및 이상치 데이터 시각화 확인 후 통계출력",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_img(0, {
  imgtitle: "6.데이터분석및통계",
  imgurl:
    "https://drive.google.com/file/d/18MbVli8vtC2s0EvnMShViToTBeytFtfx/view?usp=drive_link",
  imglog:
    "데이터 박스플롯과 히스토그램으로 데이터 분포및 이상치 데이터 시각화 확인 후 통계출력",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_img(0, {
  imgtitle: "7.밀집데이터복원함수",
  imgurl:
    "https://drive.google.com/file/d/1yh2XvVNX778OMm6EwmfsWq4Oga24Mt_d/view?usp=drive_link",
  imglog:
    "스케일링된 정답데이터를 원래의 스케일링으로 복원 모듈 생성 및 테스트",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_content("1.2 회귀예측 모델 구성"); //서브 타이틀
d1.set_img(1, {
  imgtitle: "8.시계열데이터생성",
  imgurl:
    "https://drive.google.com/file/d/1wwXc1r6QjvYJ-PBA3WMIByBqKqiFob2I/view?usp=drive_link",
  imglog: "타임스텝에 따른 시계열 훈련 데이터 생성",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_img(1, {
  imgtitle: "9.LSTM 및 ConvLSTM1D 순차모델 구성",
  imgurl:
    "https://drive.google.com/file/d/1ub0R66BWT4yxdr69ghsHWyhxGnq8Kjpf/view?usp=drive_link",
  imglog: "환경설정에 따른 LSTM 또는 ConvLSTM1D 모델을 구축 및 컴파일",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_img(1, {
  imgtitle: "10.조기종료/출력콜백함수 훈련실행",
  imgurl:
    "https://drive.google.com/file/d/1g5v3-fRxJ543zTh4cHh_OZ6gbsuKJNdE/view?usp=drive_link",
  imglog:
    "최적값 수렴후 훈련 조기종료와 훈련과정 verbose 콜백함수 등록후 훈련 실시",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_img(1, {
  imgtitle: "11.훈련결과 시각화",
  imgurl:
    "https://drive.google.com/file/d/1SeBPXhDEA_WH60Gl5ZIKKCog3A6gI5AE/view?usp=drive_link",
  imglog: "MSE , MAE LOSS 시각화 그래프",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_img(1, {
  imgtitle: "12.모델 오차율 산정",
  imgurl:
    "https://drive.google.com/file/d/1duh3JAdyeLE27Jzg4mAaZp0WNrgQ3-7X/view?usp=drive_link",
  imglog: "모델의 평균 오차율과 필드별 오차율 산정",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
d1.set_img(1, {
  imgtitle: "13.모델저장 및 실제예측값출력",
  imgurl:
    "https://drive.google.com/file/d/1qmj3-Eza3SswcHtYC1lgqCx45BovpqIy/view?usp=drive_link",
  imglog: "다음 회차 번호 예측",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/jupyter_ai/lotto_rnn.ipynb",
});
//d1.set_img(0, { imgtitle: "", imgurl: "", imglog: "", sourceurl: "" })
d1.set_content("1.3 코드 리팩토링"); //서브 타이틀
d1.set_img(2, {
  imgtitle: "14.코드리팩토링",
  imgurl:
    "https://drive.google.com/file/d/1mSRxbLNJraWxHdnynhu1crAOwPW84d1S/view?usp=drive_link",
  imglog:
    "저장된모델불러오기,데이터전처리,스케일링복원,예측출력,모델업그레이드(미구현),오차율출력,번호예측실행시점모듈",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/Lotto_AI/service_model.py",
});
d1.set_img(2, {
  imgtitle: "15.프로젝트 디렉토리구성",
  imgurl:
    "https://drive.google.com/file/d/1T-BTKpUbKPoz0I4BSEbCih2MBBtcFQ0q/view?usp=drive_link",
  imglog: "모델디렉터리 및 서비스페이지 분리",
  sourceurl: "https://github.com/eu-001/AISEC_0612/tree/main/Lotto_AI",
});
d1.set_content("1.4 플라스크 미들웨어 구현"); //서브 타이틀
d1.set_img(3, {
  imgtitle: "16.인덱스페이지 라우팅",
  imgurl:
    "https://drive.google.com/file/d/1daTdfTWZ8j4Eb23MV0KDdUw2F2SdJ4Lm/view?usp=drive_link",
  imglog: "템플릿츠 디렉터리의 최초 인덱스 페이지  출력 주소 라우팅",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/Lotto_AI/WebFlask.py",
});
d1.set_img(3, {
  imgtitle: "17.모델 예측 페이지 라우팅",
  imgurl:
    "https://drive.google.com/file/d/1SiKWa6xsRSV-Kld811B69scBgIeryIzl/view?usp=drive_link",
  imglog:
    "예측날짜, 모델명 파라미터 수신 후 모델의 예측값 형식에 따른 JSON 데이터로 송출",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/Lotto_AI/WebFlask.py",
});
d1.set_img(3, {
  imgtitle: "18.플라스크 미들웨어 가동",
  imgurl:
    "https://drive.google.com/file/d/13Depxp2_Rv128z5wIWPQq-_Z3ylgxnpV/view?usp=drive_link",
  imglog: "플라스크 미들웨어 서버 가동 화면 스냅샷(웹서버 연동 미구현)",
  sourceurl: "",
});
d1.set_content("1.5 사용자 UI 구현"); //서브 타이틀
d1.set_img(4, {
  imgtitle: "19.사용자 인덱스 페이지 액세스",
  imgurl:
    "https://drive.google.com/file/d/1AQ4Oi38B0Py5GRXJXBHrtwQzvYFQ9lNf/view?usp=drive_link",
  imglog:
    "이용자가 접근할 최초 인덱스 페이지 스냅샷(예측 날짜 및 모델 선택 가능)",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/Lotto_AI/templates/index.html",
});
d1.set_img(4, {
  imgtitle: "20.모델별 타입스텝별 예측서비스 선택",
  imgurl:
    "https://drive.google.com/file/d/1rqqHRiqPxRsTU8H3Pq7EkzQigR94RIxK/view?usp=drive_link",
  imglog: "원하는 날짜와 지정된 모델별 타임스텝별 서비스 항목 선택",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/Lotto_AI/templates/index.html",
});
d1.set_img(4, {
  imgtitle: "21.예측 진행중 스냅샷",
  imgurl:
    "https://drive.google.com/file/d/1PyzZYyfnB-59oTC8-rlFupqosRXPU_5M/view?usp=drive_link",
  imglog:
    "이용자 서비스 요구시 미들웨어로 부터 예측값 출력 수신 로딩 화면 스냅샷",
  sourceurl:
    "https://github.com/eu-001/AISEC_0612/blob/main/Lotto_AI/templates/index.html",
});
d1.set_content("1.6 로또 예측 서비스 구동"); //서브 타이틀
d1.set_img(5, {
  imgtitle: "22.예측 결과 스냅샷",
  imgurl:
    "https://drive.google.com/file/d/1wylMIBu7Jwvgyo__Xv8xER-Wgt2ZF5_k/view?usp=drive_link",
  imglog: "각 번호별 예측 번호 추출과 오차확률 출력",
  sourceurl: "",
});
d1.set_img(5, {
  imgtitle: "23.모델별 다중예측 진행중 스냅샷",
  imgurl:
    "https://drive.google.com/file/d/1MrEMGtf5WQvE6Yn1H2TIEfC5gAE2mbnc/view?usp=drive_link",
  imglog:
    "기존 예측과 다른 모델의 예측 결과 비교를 위한 다중모델예측 진행 스냅샷",
  sourceurl: "",
});
d1.set_img(5, {
  imgtitle: "24.모델별 다중예측 결과 스냅샷",
  imgurl:
    "https://drive.google.com/file/d/1enTbXAtzQdVt_tur1WoUgQ8sG3fCkPx_/view?usp=drive_link",
  imglog:
    "원하는 모델 선택 후 예측결과를 모델별로 비교 분석할 수 있는 다중모델 예측 결과 스냅샷",
  sourceurl: "",
});
d1.set_img(5, {
  imgtitle: "25.원하는 모델을 선택하여 여러 예측값 출력",
  imgurl:
    "https://drive.google.com/file/d/1eMlD5HLja8n3vx33t_mGOrUh1LFEBUKe/view?usp=drive_link",
  imglog:
    "원하는 모델 선택 후 여러 모델의 예측값을 조합하여 번호를 선택할 수 있는 결과 스냅샷 ",
  sourceurl: "",
});

d1.set_fill(
  "로또 추첨일의 날짜로 당첨번호를 스케일링 한 후 두가지 유형의 모델로 예측값과 오차를 출력, 차후 각 번호의 자리별 다중분류(softmax) 형태의 예측값 출력 개선 예정 "
); //사용자 에필로그
data_sets.push(d1);

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현"); //메인타이틀

data_sets.push(d2);

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현"); //메인타이틀

data_sets.push(d3);

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현"); //메인타이틀

data_sets.push(d4);
