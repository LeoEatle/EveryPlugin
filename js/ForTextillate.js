$(function () {
    $('.tlt').textillate(
    	{ 
    		// 这是默认的文字选择器来把特效用于所有的文字
		  selector: '.texts',
		
		  // 循环选项
		  loop: true,
		
		  // 设置最短的展示时间
		  minDisplayTime: 2000,
		
		  // 设置开始动画的延迟时间
		  // (你可能需要先设置visiblity : hidden来控制特效)
		  initialDelay: 0,
		
		  // 设置是否自动开始动画
		  autoStart: true,
		
		  // 关于"in"特效的基础设置，这个特效与元素是否被隐藏无关
		  inEffects: [],
		
		  //关于"out"特效的基础设置
		  outEffects: [ 'hinge' ],
    		in: { 
    			    effect: 'rotateInDownLeft' 
    		      },
    	    out: {
				    effect: 'rotateOutUpRight',
				    delayScale: 1.5,
				    delay: 50,
				    sync: false,
				    shuffle: false,
				    reverse: true,
				    callback: function () {}
				  },
    	}
    );
    $('.tlt2').textillate(
    	{ 
    		// 这是默认的文字选择器来把特效用于所有的文字
		  selector: '.texts',
		
		  // 循环选项
		  loop: true,
		
		  // 设置最短的展示时间
		  minDisplayTime: 2000,
		
		  // 设置开始动画的延迟时间
		  // (你可能需要先设置visiblity : hidden来控制特效)
		  initialDelay: 0,
		
		  // 设置是否自动开始动画
		  autoStart: false,
		
		  // 关于"in"特效的基础设置，这个特效与元素是否被隐藏无关
		  inEffects: [],
		
		  //关于"out"特效的基础设置
		  outEffects: [ ],
    		in: { 
    			    effect: 'flash' 
    		      },
    		out: {
    			    effect: 'flash'
    		},
    	    
    	}
    )
    
    $('.tlt2').mouseenter(function()
    {
    	$('.tlt2').textillate('start');
    })
    $('.tlt2').mouseleave(function()
    {
    	$('.tlt2').textillate('stop');
    })
})