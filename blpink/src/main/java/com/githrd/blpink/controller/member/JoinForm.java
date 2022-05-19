package com.githrd.blpink.controller.member;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.blpink.controller.Blpinter;
import com.githrd.blpink.dao.MemberDao;
import com.githrd.blpink.vo.MemberVO;

public class JoinForm implements Blpinter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		if(req.getSession().getAttribute("SID") != null) {
			req.setAttribute("isRedirect", true);
			return "/blpink/main.black";
		}
		MemberDao mDao = new MemberDao();
		ArrayList<MemberVO> list = mDao.getAvtList();
		req.setAttribute("LIST", list);
		String view = "member/join";
		return view;
	}

}
