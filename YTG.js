(function($) {

    $.fn.getYouTubeVideos = function(options) {
        var that = this;
        var settings = {
            items: 50,
            username: 'nationalgeographic',
            width: 200,
            height: 150
        };
        options = $.extend(settings, options);

        var url = 'http://gdata.youtube.com/feeds/api/videos?q=' + options.username + '&max-results=' + options.items + '&v=2&alt=jsonc';

        return that.each(function() {

            var element = $(that);
            var html = '';

            $.getJSON(url, function(videos) {

                var items = videos.data.items;
                for (var i in items) {

                    var item = items[i];
                    var title = item.title;
                    var description = item.description;
                    var url = item.content['5'];
                    var img = item.thumbnail.hqDefault;

                    html += '<div class="video">';
                    html += url;
                    html += '<img src="' + img + '" id=YTThumbnail>';
                    html += '<h4>' + title + '</h4>';
                    html += '<p>' + description + '</p>';
                    html += '</div>';

                }
                element.html(html);
            });



        });

    };

})(jQuery);

$('#youtube').getYouTubeVideos();
