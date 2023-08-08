function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  https://hani10004.github.io/banimg/20300/ban_01000-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01001-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01002-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01003-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01004-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01005-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01006-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01007-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01009-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01010-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01011-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01012-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01013-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01014-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01015-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01016-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01017-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01018-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01019-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01020-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01021-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01022-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01023-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01024-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01025-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01026-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01027-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01028-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01029-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01030-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01031-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01032-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01033-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01034-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01035-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01036-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01037-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01038-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01039-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01040-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01041-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01042-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01043-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01044-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01045-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01046-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01047-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01048-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01049-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01050-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01051-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01052-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01053-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01054-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01055-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01056-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01057-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01058-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01059-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01060-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01061-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01062-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01063-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01064-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01065-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01066-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01067-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01068-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01069-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01070-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01071-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01072-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01073-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01074-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01075-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01076-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01077-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01078-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01079-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01080-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01081-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01082-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01083-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01084-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01085-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01086-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01087-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01088-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01089-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01090-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01091-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01092-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01093-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01094-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01095-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01096-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01097-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01098-removebg-preview.png
  https://hani10004.github.io/banimg/20300/ban_01099-removebg-preview.png

  https://hani10004.github.io/banimg/20100/ban_01101-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01102-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01103-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01104-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01105-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01106-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01107-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01108-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01109-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01110-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01111-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01112-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01113-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01114-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01115-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01116-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01117-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01118-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01119-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01120-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01121-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01122-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01123-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01124-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01125-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01126-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01127-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01128-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01129-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01130-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01131-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01132-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01133-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01134-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01135-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01136-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01137-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01138-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01139-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01140-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01141-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01142-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01143-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01144-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01145-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01146-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01147-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01148-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01149-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01150-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01151-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01152-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01153-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01154-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01155-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01156-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01157-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01158-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01159-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01160-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01161-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01162-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01163-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01164-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01165-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01166-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01167-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01168-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01169-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01170-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01171-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01172-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01173-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01174-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01175-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01176-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01177-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01178-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01179-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01180-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01181-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01182-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01183-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01184-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01185-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01186-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01187-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01188-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01189-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01190-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01191-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01192-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01193-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01194-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01195-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01196-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01197-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01198-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01199-removebg-preview.png
  https://hani10004.github.io/banimg/20100/ban_01200-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01201-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01202-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01203-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01204-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01205-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01206-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01207-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01208-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01209-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01210-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01211-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01212-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01213-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01214-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01215-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01216-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01217-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01218-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01219-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01220-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01221-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01222-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01223-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01224-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01225-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01226-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01227-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01228-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01229-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01230-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01231-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01232-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01233-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01234-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01235-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01236-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01237-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01238-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01239-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01240-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01241-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01242-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01243-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01244-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01245-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01246-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01247-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01248-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01249-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01250-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01251-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01252-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01253-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01254-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01255-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01256-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01257-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01258-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01259-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01260-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01261-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01262-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01263-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01264-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01265-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01266-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01267-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01268-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01269-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01270-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01271-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01272-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01273-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01274-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01275-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01276-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01277-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01278-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01279-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01280-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01281-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01282-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01283-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01284-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01285-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01286-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01287-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01288-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01289-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01290-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01291-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01292-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01293-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01294-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01295-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01296-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01297-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01298-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01299-removebg-preview.png
  https://hani10004.github.io/banimg/20200/ban_01300-removebg-preview.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})