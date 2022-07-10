// https://github.com/sdepold/jquery-rss


jQuery(function($) {
    $("#divRss").rss("https://arterestauracionesfagaldemariaeugenia.blogspot.com/feeds/posts/default",
    {
        limit: 5,
        encoding: "UTF-8",
        dateFormat: 'DD MM YYYY',
        dateLocale: "es",
        layoutTemplate: "<div>{entries}</div>",
        //entryTemplate: '<li class="blog_card"><a class="blog_title" href="{url}" target="_blank" >{title}</a><br/>{author} - {date}<br/>{shortBodyPlain}</li>',
        entryTemplate: '<li class="blog_card"><a class="card_title" href="{url}" target="_blank" >{title}</a><p class="card_date">{author} - {date}</p><p class="card_body">{shortBodyPlain}</p></li>',
        order: "-publishedDate",
    });
  });


