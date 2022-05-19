package com.githrd.blpink.controller.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.blpink.controller.Blpinter;
import com.githrd.blpink.dao.MemberDao;
import com.githrd.blpink.vo.MemberVO;

public class Join implements Blpinter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String name = req.getParameter("name");
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String mail = req.getParameter("mail");
		String tel = req.getParameter("tel");
		String gen = req.getParameter("gen");
		String sno = req.getParameter("ano");
		int ano = Integer.parseInt(sno);
		
		MemberVO mVO = new MemberVO();
		mVO.setName(name);
		mVO.setId(id);
		mVO.setPw(pw);
		mVO.setMail(mail);
		mVO.setTel(tel);
		mVO.setGen(gen);
		mVO.setAno(ano);
		
		req.setAttribute("isRedirect", true);
		
		MemberDao mDao = new MemberDao();
		int cnt = mDao.addMember(mVO);
		
		if(cnt == 1) {
			return "/blpink/main.black";
		} else {
			return "/blpink/JoinForm.black";
		}
		

	}

}
