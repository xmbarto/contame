import '../css/main.css';
import $ from 'jquery';

$('.burger-menu').click(function(){
    $(this).siblings('.mobile-menu').toggleClass('hidden');
});

