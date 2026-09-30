#!/usr/bin/env python3
"""
新词饱和度与 SEO/GEO 机会打分器 (New Word Saturation & Opportunity Scorer)
用法: python3 radar_scanner.py --keyword "flux pro generator"
"""

import sys
import argparse
import urllib.parse
import urllib.request
import json
import re

ROOT_SUFFIXES = [
    "generator", "maker", "free online", "playground",
    "prompt generator", "converter", "enhancer", "upscaler",
    "alternative", "api wrapper", "editor"
]

def generate_target_combinations(entity):
    entity_clean = entity.strip().lower()
    combinations = []
    for suffix in ROOT_SUFFIXES:
        combinations.append(f"{entity_clean} {suffix}")
    return combinations

def calculate_saturation_score(keyword):
    # 模拟通用评估维度
    # 1. 词长
    words = keyword.split()
    length_bonus = 20 if 2 <= len(words) <= 4 else 10
    
    # 2. 词根匹配
    has_high_intent_suffix = any(s in keyword for s in ["generator", "maker", "online free", "converter"])
    intent_bonus = 40 if has_high_intent_suffix else 20
    
    base_score = length_bonus + intent_bonus + 25 # 基础预估分
    return min(base_score, 95)

def main():
    parser = argparse.ArgumentParser(description="Overseas MVP Keyword Radar")
    parser.add_argument("--entity", "-e", type=str, required=True, help="New entity / model name / topic (e.g. 'qwen image')")
    args = parser.parse_args()

    entity = args.entity
    print(f"==================================================")
    print(f"🎯 新词雷达扫描: [{entity}]")
    print(f"==================================================")

    combos = generate_target_combinations(entity)
    print("\n[推荐生成的出海目标长尾词清单]:")
    results = []
    for c in combos:
        score = calculate_saturation_score(c)
        results.append({"keyword": c, "opportunity_score": score})
        print(f"  ⚡ 关键词: {c.ljust(35)} | 机会指数: {score}/100")

    print("\n[GEO (ChatGPT / Perplexity) 优化建议]:")
    print("1. 域名建议: 尽量包含主体词 + generator/ai (例如: get{entity}.com / {entity}maker.com)")
    print("2. 页面 H1: Free Online {Entity} Generator - Fast & High Quality")
    print("3. FAQ 必须包含: 'What is {Entity}?' 与 'How to use {Entity} online for free?'")
    print("==================================================")

if __name__ == "__main__":
    main()
