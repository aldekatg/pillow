import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pillowz';
  aboutText: string = 'Hi there. Welcome to my home. I enjoy meeting people from  all over the world and I enjoy showing others why I love living in Central London. All the museums and art galleries are just a walk or ride away from me and Camden Lock is 8';
  name: string = 'Billbrat';
  city = { opp: 'Город', city: 'Алматы, Казахстан' }
  language = { opp: 'Владение языками', lang: 'Казахский, Русский, Английский' };
  stat = 'онлайн';
  recUsers = 'Рекомендуют 80% гостей';
  aver = '30 мин';
  change = 'Редактировать';

  objectItem = [{
    textTitle: 'Квартира-студия с гостиничным сервисом',
    textRoom: '4 комнаты',
    textGuest: 'до 4х гостей',
    textAdress: 'Сейфуллина 458, Айтек би Алма...',
    cancel: 'Бесплатная отмена'
  }, {
    textTitle: 'Квартира с гостиничным сервисом',
    textRoom: '3 комнаты',
    textGuest: 'до 2х гостей',
    textAdress: 'Абая 458, Айтек би Алматы',
    cancel: 'Бесплатная отмена'
  }]


  commentsItem = [{
    name: 'Максат',
    date: '23 авг. 2018',
    status: 'Рекомендует',
    color: '#00C667',
    comments: 'Супер квартира, расположение прекрасное, очень красивый вид из окна на МИД РФ, самый центр Москвы. Обязательно вернемся.'
  },
  {
    name: 'Баха',
    date: '21 авг. 2018',
    status: 'Не рекомендует',
    color: '#E81123',
    comments: 'Так себе квартира, расположение прекрасное, очень красивый вид из окна на МИД РФ, самый центр Москвы. Обязательно вернемся.'
  }, {
    name: 'Ерлый',
    date: '12 авг. 2018',
    status: 'Рекомендует',
    color: '#00C667',
    comments: 'Та, расположение прекрасное, очень красивый вид из окна на МИД РФ, самый центр Москвы. Обязательно вернемся.'
  }];
}
