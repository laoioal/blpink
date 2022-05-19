package com.githrd.blpink.controller.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.blpink.controller.Blpinter;
import com.githrd.blpink.controller.*;

public class LoginForm implements Blpinter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String view = "member/login";
		if(req.getSession().getAttribute("SID") != null) {
			// 이미 로그인 한 경우
			req.setAttribute("isRedirect", true);
			view = "/blpink/main.blp";
		}
		
		return view;
	}

}
