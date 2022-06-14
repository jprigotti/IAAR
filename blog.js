// https://github.com/sdepold/jquery-rss


jQuery(function($) {
    $("#divRss").rss("https://dailutb.blogspot.com/feeds/posts/default",
    {
        limit: 5,
        encoding: "UTF-8",
        dateFormat: 'DD MM YYYY',
        dateLocale: "es",
        layoutTemplate: "<div class='feed-container'>{entries}</div>",
        entryTemplate: '<li><a href="{url}" target="_blank" >{title}</a><br/>{author} - {date}<br/>{shortBodyPlain}</li>',
    });
  });


