import $ from 'jquery';
$(function() {
  'use strict';

  const skills = $('.skill');

  skills.each(function(i, skill) {
    document.querySelectorAll('.skill .graph .percent')[i].textContent = $(
      this
    ).data('percent');

    $(this)
      .find('.graph')
      .animate(
        {
          height: $(this).data('percent')
        },
        1000 * (i + 1)
      );
  });
});
