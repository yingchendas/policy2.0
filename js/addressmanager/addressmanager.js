$(function(){
	//编辑按钮事件
	$("#edit").tap(function(){
		var item = $(this);
		if(item.text()=="编辑"){
			$(".addr_info_body").addClass("editClass");
			$(".edit_box").show();
			item.text("完成");
		}else{
			$(".addr_info_body").removeClass("editClass");
			$(".edit_box").hide();
			item.text("编辑");
		}
		
	})
	
//	/*选中事件*/
//	$(".addr_info").tap(function(){
//		var item = $(this);
//		item.addClass("active");
//		item.siblings().removeClass("active");
//	});
	
	/*确认编辑*/
	$(".editBtn").tap(function(){
		window.location.href="add_addr.html";
	})
	
	/*删除地址*/
	$(".delBtn").tap(function(){
		$(this).parent().parent().remove();
		//todo 删除数据库数据
		
	})
})