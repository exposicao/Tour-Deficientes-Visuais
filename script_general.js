(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"toolTipHorizontalAlign":"center","backgroundPreloadEnabled":true,"class":"Player","borderRadius":0,"borderSize":0,"contentOpaque":false,"width":"100%","mediaActivationMode":"window","defaultMenu":["fullscreen","mute","rotation"],"scrollBarWidth":10,"paddingTop":0,"gap":10,"id":"rootPlayer","definitions": [{"id":"FadeInEffect_FD620183_EDA5_D4C8_41EB_106B847AC5A5","easing":"cubic_in_out","duration":1000,"class":"FadeInEffect"},{"id":"FadeOutEffect_FD62F183_EDA5_D4C8_41D6_612AFF6AFCE4","easing":"cubic_in_out","duration":1000,"class":"FadeOutEffect"},{"id":"FadeOutEffect_FD62E183_EDA5_D4C8_41EB_E22AA765F9B4","easing":"cubic_in_out","duration":1000,"class":"FadeOutEffect"},{"image":{"class":"ImageResource","levels":[{"url":"media/photo_E30AF85B_EE41_D45A_41CB_E5FC97104F69.jpg","class":"ImageResourceLevel"}]},"class":"Photo","id":"photo_E30AF85B_EE41_D45A_41CB_E5FC97104F69","height":4500,"duration":0,"label":trans('photo_E30AF85B_EE41_D45A_41CB_E5FC97104F69.label'),"width":3320,"data":{"label":"Imagem_fundo_tour_virtual_deficiente_visual2"},"thumbnailUrl":"media/photo_E30AF85B_EE41_D45A_41CB_E5FC97104F69_t.jpg"},{"autoplay":true,"loop":false,"audio":"this.audiores_E2EAE1D6_EE43_D4AA_41BC_A180BF7A99BC","data":{"label":"Night in Venice"},"class":"MediaAudio","id":"audio_E25E7EEE_EE43_AC7A_41DA_E2241BA065FB"},{"toolTipHorizontalAlign":"center","subtitlesFontFamily":"Arial","class":"ViewerArea","progressLeft":0,"toolTipBorderRadius":3,"width":"100%","translationTransitionDuration":1000,"toolTipFontColor":"#606060","progressBarBackgroundColor":["#3399FF"],"subtitlesShadow":false,"subtitlesPaddingTop":5,"id":"MainViewer","subtitlesEnabled":true,"subtitlesTop":0,"progressBackgroundColor":["#FFFFFF"],"paddingLeft":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"paddingRight":0,"toolTipShadowBlurRadius":3,"toolTipFontWeight":"normal","toolTipBorderColor":"#767676","toolTipShadowSpread":0,"transitionDuration":500,"subtitlesGap":0,"subtitlesTextShadowColor":"#000000","playbackBarLeft":0,"progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"progressBackgroundOpacity":1,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"height":"100%","playbackBarBorderColor":"#FFFFFF","progressBottom":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowVerticalLength":0,"playbackBarBorderRadius":0,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","firstTransitionDuration":0,"toolTipShadowOpacity":1,"toolTipTextShadowOpacity":0,"subtitlesPaddingBottom":5,"playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"progressHeight":10,"subtitlesHorizontalAlign":"center","playbackBarHeadOpacity":1,"toolTipFontFamily":"Arial","progressBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingTop":4,"playbackBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"progressBarBorderRadius":0,"progressBackgroundColorRatios":[0],"minWidth":100,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"toolTipPaddingRight":6,"propagateClick":false,"subtitlesVerticalAlign":"bottom","borderRadius":0,"progressRight":0,"borderSize":0,"minHeight":50,"toolTipTextShadowColor":"#000000","playbackBarHeadBorderRadius":0,"toolTipBorderSize":1,"progressOpacity":1,"subtitlesBorderSize":0,"playbackBarProgressOpacity":1,"playbackBarProgressBackgroundColorDirection":"vertical","paddingTop":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBorderColor":"#000000","toolTipOpacity":1,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","subtitlesOpacity":1,"paddingBottom":0,"toolTipShadowColor":"#333138","toolTipPaddingLeft":6,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"toolTipFontSize":"1.11vmin","vrPointerColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","progressBarBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"toolTipPaddingBottom":4,"playbackBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","subtitlesFontWeight":"normal","toolTipShadowHorizontalLength":0,"subtitlesPaddingLeft":5,"surfaceReticleSelectionColor":"#FFFFFF","surfaceReticleOpacity":0.6,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesTextShadowHorizontalLength":1,"transitionMode":"blending","toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"vrPointerSelectionColor":"#FF6600","progressBorderRadius":0,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"displayTooltipInSurfaceSelection":true,"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBackgroundColor":"#F6F6F6","toolTipShadowVerticalLength":0,"subtitlesPaddingRight":5,"subtitlesTextShadowVerticalLength":1,"shadow":false,"data":{"name":"Main Viewer"}},{"playList":"this.album_E3BD7A3A_EDAF_7438_41C5_7F12ACB1C101_AlbumPlayList","label":trans('album_E3BD7A3A_EDAF_7438_41C5_7F12ACB1C101.label'),"loop":false,"id":"album_E3BD7A3A_EDAF_7438_41C5_7F12ACB1C101","data":{"label":"Photo Album Imagem_fundo_tour_virtual_deficiente_visual5"},"class":"PhotoAlbum","thumbnailUrl":"media/album_E3BD7A3A_EDAF_7438_41C5_7F12ACB1C101_t.png"},{"id":"FadeInEffect_FD62D183_EDA5_D4C8_41D6_DF5FC542F46D","easing":"cubic_in_out","duration":1000,"class":"FadeInEffect"},{"toolTipHorizontalAlign":"center","class":"IconButton","borderRadius":0,"borderSize":0,"width":60,"cursor":"hand","paddingTop":0,"id":"IconButton_E127E352_ED42_E76C_41E7_B52B904ED6A1","paddingBottom":0,"paddingRight":0,"paddingLeft":0,"horizontalAlign":"center","backgroundColorRatios":[],"top":"2.43%","backgroundOpacity":0.3,"height":60,"transparencyActive":true,"backgroundColorDirection":"vertical","backgroundColor":[],"verticalAlign":"middle","click":"this.mainPlayList.set('selectedIndex', 0)","mode":"push","left":"1.31%","propagateClick":false,"iconURL":"skin/IconButton_E127E352_ED42_E76C_41E7_B52B904ED6A1.png","minWidth":1,"shadow":false,"minHeight":1,"data":{"name":"IconButton2995"}},{"items":[{"player":"this.MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayListItem","media":"this.album_E3BD7A3A_EDAF_7438_41C5_7F12ACB1C101","end":"this.trigger('tourEnded')","start":"this._initItemWithComps(this.mainPlayList, 0, [this.IconButton_E127E352_ED42_E76C_41E7_B52B904ED6A1], 'begin', false, this.FadeOutEffect_FD62F183_EDA5_D4C8_41D6_612AFF6AFCE4, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.IconButton_E127E352_ED42_E76C_41E7_B52B904ED6A1], 'end', true, this.FadeInEffect_FD620183_EDA5_D4C8_41EB_106B847AC5A5, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.MainViewer], 'begin', true, this.FadeInEffect_FD62D183_EDA5_D4C8_41D6_DF5FC542F46D, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.MainViewer], 'end', false, this.FadeOutEffect_FD62E183_EDA5_D4C8_41EB_E22AA765F9B4, 0, 0); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000')"}],"class":"PlayList","id":"mainPlayList"},{"viewerArea":"this.MainViewer","class":"PhotoAlbumPlayer","id":"MainViewerPhotoAlbumPlayer"},{"mp3Url":trans('audiores_E2EAE1D6_EE43_D4AA_41BC_A180BF7A99BC.mp3Url'),"class":"AudioResource","id":"audiores_E2EAE1D6_EE43_D4AA_41BC_A180BF7A99BC"},{"items":[{"camera":{"class":"PhotoCamera","scaleMode":"fit_inside"},"class":"PhotoPlayListItem","media":"this.photo_E30AF85B_EE41_D45A_41CB_E5FC97104F69"}],"class":"PhotoPlayList","id":"album_E3BD7A3A_EDAF_7438_41C5_7F12ACB1C101_AlbumPlayList"}],"paddingBottom":0,"mouseWheelEnabled":true,"scrollBarOpacity":0.5,"paddingRight":0,"paddingLeft":0,"mobileMipmappingEnabled":false,"horizontalAlign":"left","backgroundColorRatios":[0],"overflow":"hidden","backgroundOpacity":1,"height":"100%","defaultVRPointer":"laser","backgroundColorDirection":"vertical","backgroundColor":["#FFFFFF"],"layout":"absolute","downloadEnabled":true,"verticalAlign":"top","scrollBarColor":"#000000","scrollBarVisible":"rollOver","vrPolyfillScale":0.75,"children":["this.MainViewer","this.IconButton_E127E352_ED42_E76C_41E7_B52B904ED6A1"],"scripts":{"translate":TDV.Tour.Script.translate,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getKey":TDV.Tour.Script.getKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"init":TDV.Tour.Script.init,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"clone":TDV.Tour.Script.clone,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"isPanorama":TDV.Tour.Script.isPanorama,"executeJS":TDV.Tour.Script.executeJS,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"initQuiz":TDV.Tour.Script.initQuiz,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"mixObject":TDV.Tour.Script.mixObject,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizStart":TDV.Tour.Script.quizStart,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaByName":TDV.Tour.Script.getMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showWindow":TDV.Tour.Script.showWindow,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setLocale":TDV.Tour.Script.setLocale,"cloneCamera":TDV.Tour.Script.cloneCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoForward":TDV.Tour.Script.historyGoForward,"cloneBindings":TDV.Tour.Script.cloneBindings,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setValue":TDV.Tour.Script.setValue,"historyGoBack":TDV.Tour.Script.historyGoBack,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPixels":TDV.Tour.Script.getPixels,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"shareSocial":TDV.Tour.Script.shareSocial,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem},"scrollBarMargin":2,"desktopMipmappingEnabled":false,"start":"this.playAudioList([this.audio_E25E7EEE_EE43_AC7A_41DA_E2241BA065FB], true); this.init()","propagateClick":false,"minWidth":0,"shadow":false,"minHeight":0,"data":{"defaultLocale":"pt","name":"Player680","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"rate":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Tue Oct 18 2022