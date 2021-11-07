<template>
	<!-- 我想着用vant里头那个物流进度做一个图，应该会不错 -->
	<div class="journey">
		<div class="journeybar"></div>
		<div class="timeline">
		  <div class="year">
		    <div class="inner">
		      <span>2020</span>
		    </div>
		  </div>
		  
		  <ul class="days">
		    <li class="day">
		      <div class="events">
		        <p>项目小组成立，分析当前时代热点，结合目前技术潮流，发掘创新点，商议项目需求。</p>
		        <div class="date">玖月 - September</div>
		      </div>
		    </li>
		    
		    <li class="day">
		      <div class="events">
		        <p>硬件软件两方面分别开展进度，根据需求按照计划开展工作，并阶段性进行协同调试。</p>
		        <div class="date">拾月 - October</div>
		      </div>
		    </li>
		    
			<li class="day">
			  <div class="events">
			    <div class="day__img">
			      <img src="../../assets/img/history/think.jpg" alt="" />
			      <p class="caption">
					根据当前进度调整制订往后几个月的计划。
			      </p>
			    </div>
				
			    <div class="date">拾壹月 - November</div>
			  </div>
			</li>
			
		    <li class="day">
		      <div class="events">
		        
				<p>硬件和软件都完成了基本功能的测试。</p>
		        <div class="date">拾贰月 - Decemmber</div>
		      </div>
		    </li>
		    
			<li class="day">
			  <div class="events">
			    <p>算法实现并通过测试。</p>
			    <div class="date">壹月 - January</div>
			  </div>
			</li>
			
		    <li class="day">
		      <div class="events">
				  <div class="day__img">
				    <img src="../../assets/img/history/chat.png" alt="" />
				    <p class="caption">
						项目成员于线上再次讨论确切的需求。
				    </p>
				  </div>
		        
		        <div class="date">贰月 - February</div>
		      </div>
		    </li>
		    
		    <li class="day">
		      <div class="events">
		        <p>设计眼罩实体；APP和网站的开发开始进行多次迭代。</p>
		        <div class="date">弎月 - March</div>
		      </div>
		    </li>
		    
		    <li class="day">
		      <div class="events">
		        <p>完成眼罩实体的制作，多端进行联调。</p>
		        <div class="date">肆月 - April</div>
		      </div>
		    </li>
		  </ul>
		  
		  <div class="year year--end">
		    <div class="inner">
		      <span>2021</span>
		    </div>
		  </div>
		</div>
	</div>
	
</template>

<script>
export default {
	name: "Journey",
	data() {
		return {

		};
	},
	components: {

	},
	computed:{

	},
	methods:{
	},
}
</script>
<style >
/* 想要不出现这个他妈的横向滚动条 就不要乱用scoped */
html {
  box-sizing: border-box;
  font-family: georgia;
}
.journey{
	width: 100%;
	position: relative;
	overflow:-Scroll;
	overflow-x: hidden;
	background-color: #f1f1f1;
}
.journeybar{
	height: 85px;
	position: relative;
	width: 100%;
	background-color: #000000;

}
::-webkit-scrollbar {
 width: 0 !important;
}
::-webkit-scrollbar {
 width: 0 !important;height: 0;
}
</style>
<style lang="scss" scoped >
/* apply a natural box layout model to all elements, but allowing components to change */

*, *:before, *:after {
  box-sizing: inherit;
}

img {
  max-width: 100%;
}


.timeline {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 80px;
  .year {
	
    display: inline-block;
    font-size: 36px;
    font-weight: bold;
    position: relative;
    
    span {
      display: inline-block;
      padding-bottom: 6px;  
    }
    
    &:after {
      content: "";
      display: block;
      width: 80%;
      margin: auto;
      height: 1px;
      background: #403A3A;
    }
    
    &--end {
      
      &:before {
        content: "";
        display: block;
        width: 80%;
        margin: auto;
        height: 1px;
        background: #403A3A;
      }
      
      &:after {
        content: none;
      }
    }
  }
  
  .days {
    list-style-type: none;
    margin: 0;
    padding: 0;
    
    .day {
      width: 100%;
      float: left;
      
      .events {
        position: relative;
        float: left;
        border-right: 1px solid #403A3A;
        padding: 30px;
        text-align: right;
        width: 50%;
        
        &:after {
          content: "";
          width: 40%;
          display: inline-block;
          height: 1px;
          background: #403A3A;
          
          position: absolute;
          right: 0;
        }
        
        .date {
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          
          padding: 30px;
          text-align: left;
          
          color: #403A3A;
          font-size: 24px;
          white-space: nowrap;
        }
        
        .day__img {
          margin-right: -30px;
          position: relative;
          overflow: hidden;
          
          img {
            display: block;
            float: right;
          }
          
          .caption {
            position: absolute;
            margin: 0;
            
            bottom: 0;
            right: 0;
            padding: 20px;
            background: rgba(#000, 0.7);
            color: #fff;
          }
        }
      }
      
      &:nth-child(odd) {
        .events {
          width: calc(50% + 1px);
          float: right;
          border-right: 0;
          border-left: 1px solid #403A3A;
          text-align: left;
          
          &:after {
            right: auto;
            left: 0;
          }

          .date {
			
            left: auto;
            right: 100%;
            text-align: right;
          }
          
          .day__img {
            margin-right: auto;
            margin-left: -30px;

            img {
              float: left;
            }

            .caption {
              right: auto;
              left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
