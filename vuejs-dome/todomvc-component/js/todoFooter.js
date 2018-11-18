(function (window) {
	var template = `
	<footer class="footer">
				<!-- This should be 0 items left by default -->
				<span class="todo-count"><strong>{{count}}</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li v-for="item in option" :key="item.id">
						<a @click="handleClick(item.id)" :class="{selected:item.selected}" :href="'#/'+item.title">{{item.title}}</a>
					</li>
					<!--<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>-->
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" @click="handleClear">Clear completed</button>
			</footer>
	`
	window.todoFooter={
		template,
		props:['todos','count','filterText'],
		data(){
			return {
				option:[
					{id:1,title:"All",selected:true},
					{id:2,title:"Active",selected:false},
					{id:3,title:"Completed",selected:false},
				]
			}
		},
		methods:{
			handleClick(id){
				let index=this.option.findIndex(item=>{
					return item.id==id
				})
				this.option.forEach((e,i) => {
					if(i==index){
						e.selected=true
						this.$emit('filter',e.title)
					}else{
						e.selected=false
					}
				})
			},
			handleClear(){
				this.$emit('clear')
			}
		},
	}
})(window)
